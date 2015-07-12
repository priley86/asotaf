window.RING_CHART_WIDTH = 1200
window.RING_CHART_HEIGHT = 700
window.RING_CHART_RADIUS = 500
window.RING_CHART_MAX_NODES = 60

var bezInterpolator = chroma.bezier(['lightyellow', 'orange', 'red'])
window.CHART_GET_COLOR = function(d) {
	return;
	if (d.names) {return 'black'}
	var node = d.id ? getNode(d.id) : getNode(d.names[0])

	var min = 100
	var max = 300
	var x = (Math.max(min, Math.min(max, node.refs)) - min) / (max - min)

	var color = bezInterpolator(x).hex()
	return color
}

window.CHART_GET_PATH_COLOR = function(d) {
	return 'rgb(208,208,208)'
	var strength = getConnectionStrength(
		getNode(d.source.id),
		getNode(d.target.id)
	)

	var val = Math.max(140, Math.min(220, 220 - ((Math.sqrt(strength) - 2) * 50)))

	console.log(strength + ' / ' + val)
	return 'rgb(' + val + ',' + val + ',' + val + ')'
}

window.CHART_GET_PATH_WIDTH = function(d) {
	var strength = getConnectionStrength(
		getNode(d.source.id),
		getNode(d.target.id)
	)

	return Math.sqrt(strength) * 0.25
}

window.node_lookup = {}
window.edge_lookup = {}
var nodes = []
var edges = []

$.get('topics.json', function(results) {
	processData(results)
	root_node = getNode('theories')
	update()
})

// var graphWidth  = 800
// var graphHeight = 800

// var nodeRadius  = graphWidth / 20
// var graphRadius = (graphWidth / 2)  - nodeRadius

// var graph = d3.select('.graph')
//   .attr('id', 'node-graph')
//   .attr('width',  graphWidth)
//   .attr('height', graphHeight)
var fisheye = d3.fisheye.circular()
	.radius(50)
	.distortion(4)

var root_node = getNode('theories')

$('body').on('mousemove', '#d3plus', handleMouseMove)

var lastMouseMove = null
var mouseMoveCtx = null
function handleMouseMove(e) {
	if (e) {
		lastMouseMove = e
		mouseMoveCtx = this
	}
	else {
		e = lastMouseMove
	}

	d3.event = e
	fisheye.focus(d3.mouse(this))

	d3.select('#viz').selectAll('.d3plus_data').each(function(d) {
		if (d.id == root_node.name) {
			var val = 'translate(' + d.d3plus.x + ',' + d.d3plus.y + ')scale(1)'

			this.parentNode.setAttribute('truetransform', val)
			this.parentNode.setAttribute('transform',     val)
			return
		}

		d.last_fisheye = d.fisheye
		d.last_val = d.val
		d.fisheye = fisheye(d.d3plus)
		var scale = d.fisheye.z

		if (d.fisheye.z == '1,1') {
			debugger
		}

		// if (d.fisheye.z == 1 && d.last_fisheye.z > 1) {
		// 	// debugger
		// }

		// console.log(d.fisheye.z)

		var val = 'translate(' + d.fisheye.x + ',' + d.fisheye.y + ')'

		if (scale > 1) {
			val += 'scale(' + scale + ')'
		}

		d.val = val

		this.parentNode.setAttribute('transform', val)

		// Setting the transform isn't enough - it can get overwritten by d3's stupid animation logic.
		// This is a hack to flip it back whenever it changes.
		this.parentNode.setAttribute('truetransform', val)

		if (!this.parentNode.observer) {
			this.parentNode.observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					var true_transform = mutation.target.getAttribute('truetransform')
					var transform      = mutation.target.getAttribute('transform')

					if (true_transform && transform != true_transform) {
						mutation.target.setAttribute('transform', true_transform)
					}
				});
			})

			this.parentNode.observer.observe(this.parentNode, {attributes: true, attributeOldValue: true})
		}
	})
		// .attr("x", function(d, a, b, c) {
		// 	return d.fisheye.x
		// })
		// .attr("yasd", function(d) { return d.fisheye.y; })
		// .attr("rx", function(d) { return 0 })//return d.fisheye.z * 4.5; })
		// .attr("ry", function(d) { return 0 })//return d.fisheye.z * 4.5; });

	d3.select('#viz').selectAll('.d3plus_edge_path').attr("x1", function(d) { return d.source.fisheye.x; })
		.attr("y1", function(d) { return d.source.fisheye.y; })
		.attr("x2", function(d) { return d.target.fisheye.x; })
		.attr("y2", function(d) { return d.target.fisheye.y; })
}

var visualization = null
function update() {
	var included_edges = getEdges(root_node)

	visualization = d3plus.viz()
		.container('#viz')
		.type('rings')
		.zoom(true)
		.edges(included_edges)
		.focus(root_node.name, function(target, self) {
			root_node = null
			for (var i = 0; i < nodes.length; i++) {
				if (nodes[i].name == target[0]) {
					root_node = nodes[i]
					break
				}
			}

			var edges = getEdges(root_node)
			self.edges(edges)

			$('text').filter(function() {
				return $(this).text() === target[0]
			}).parent().removeAttr('truetransform')

			window.setTimeout(function() {
				handleMouseMove.call(mouseMoveCtx)
			}, 85)

			return true
		})
		.draw()
}

function getEdges(target_node) {
	// TODO: keep list of all edges on each node

	// Define root / inner nodes / outer nodes
	var sorted_nodes = _.sortByAll(nodes, function(d) {
		return getConnectionStrength(target_node, d) * -1
	}, function(d) {
		return d.refs * -1
	})

	var included_nodes = _.filter(sorted_nodes, function(node) {
		return getConnectionStrength(target_node, node) > 0
	}).slice(0, RING_CHART_MAX_NODES).concat([target_node])

	var included_edges = []
	for (var i = 0; i < edges.length; i++) {
		var edge = edges[i]
		if (included_nodes.indexOf(edge.source) !== -1 && included_nodes.indexOf(edge.target) !== -1) {
			included_edges.push({source: edge.source.name, target: edge.target.name})
		}
	}

	return included_edges
}

function processData(topics) {
	for (var i = 0; i < topics.length; i++) {
		var topic = topics[i]
		var node_names = [topic.name].concat(topic.tags)

		for (var j = 0; j < node_names.length; j++) {
			for (var k = j + 1; k < node_names.length; k++) {
				connect(
					getNode(node_names[j], j == 0),
					getNode(node_names[k]),
					j == 0
				)
			}
		}
	}

	function connect(left, right, strong) {
		// Always sort alphabetically for left/right consistency
		if (right.name < left.name) {
			var temp = left
			left = right
			right = temp
		}

		// Determine edge name
		var edge_name = left.name + ':' + right.name

		var strength_increase = strong ? 20 : 1
		if (edge_lookup[edge_name]) {
			// Increase the strength of the existing edge
			edge_lookup[edge_name].strength += strength_increase
		}
		else {
			// Add new edge with strength 1, and increase the edge count for each node
			edge_lookup[edge_name] = {source: left, target: right, strength: strength_increase}
			left.edges  += 1
			right.edges += 1
		}

		// Increase total number of references to each node
		left.refs  += 1
		right.refs += 1
	}

	for (var node_key in node_lookup) {
		nodes.push(node_lookup[node_key])
	}

	for (var edge_key in edge_lookup) {
		edges.push(edge_lookup[edge_key])
	}
}

function getNode(name, theory) {
	if (!node_lookup[name]) {
		node_lookup[name] = {name: name, edges: 0, refs: 0, type: 'tag'}
	}

	if (theory) {
		node_lookup[name].type = 'theory'
	}

	return node_lookup[name]
}

function getConnectionStrength(left, right) {
	// Always sort alphabetically for left/right consistency
	if (right.name < left.name) {
		var temp = left
		left = right
		right = temp
	}

	var edge = _.find(edges, function(candidate) {
		return candidate.source == left && candidate.target == right
	})

	return edge ? edge.strength : 0
}
