/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/tinfoil', require('./api/tinfoil'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {

      // Test route for explorer
      if (req.originalUrl.indexOf('/explorer') !== -1 || (req.headers.referer && req.headers.referer.indexOf('/explorer') !== -1)) {
          var path = req.originalUrl
          if (path == '/explorer') {path = 'index.html'}
          res.sendfile(app.get('appPath') + '/explorer/' + path)
          return
      }

      res.sendfile(app.get('appPath') + '/index.html');
    });
};
