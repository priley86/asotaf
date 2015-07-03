/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /tinfoil              ->  index
 * POST    /tinfoil              ->  create
 * GET     /tinfoil/:id          ->  show
 * PUT     /tinfoil/:id          ->  update
 * DELETE  /tinfoil/:id          ->  destroy
 * GET     /tinfoil/search/:text ->  search
 */

'use strict';

var _ = require('lodash');
var Tinfoil = require('./tinfoil.model');

// Get list of tinfoil
exports.index = function(req, res) {
  Tinfoil.find('name info', function (err, tinfoils) {
    if(err) { return handleError(res, err); }
    return res.json(200, tinfoils);
  });
};

// Get a single tinfoil
exports.show = function(req, res) {
  Tinfoil.findById(req.params.id, function (err, tinfoil) {
    if(err) { return handleError(res, err); }
    if(!tinfoil) { return res.send(404); }
    return res.json(tinfoil);
  });
};

// Creates a new tinfoil in the DB.
exports.create = function(req, res) {
  Tinfoil.create(req.body, function(err, tinfoil) {
    if(err) { return handleError(res, err); }
    return res.json(201, tinfoil);
  });
};

// Updates an existing tinfoil in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tinfoil.findById(req.params.id, function (err, tinfoil) {
    if (err) { return handleError(res, err); }
    if(!tinfoil) { return res.send(404); }
    var updated = _.merge(tinfoil, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tinfoil);
    });
  });
};

// Deletes a tinfoil from the DB.
exports.destroy = function(req, res) {
  Tinfoil.findById(req.params.id, function (err, tinfoil) {
    if(err) { return handleError(res, err); }
    if(!tinfoil) { return res.send(404); }
    tinfoil.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// Search for tinfoils
// exports.search = function(req, res) {
//   Tinfoil.find({ $text : { $search : req.params.text } }, function (err, tinfoils) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, tinfoils);
//   });
// };

// Search for tinfoils
exports.search =function(req,res) {
  Tinfoil.find(
    { $text : { $search : req.params.text } },
    { score : { $meta: "textScore" } }
  ).
  sort({ score : { $meta : 'textScore' } }).
  select('name info').
  exec(function(err, tinfoils) {
    if(err) { return handleError(res, err); }
    return res.json(200, tinfoils);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}