'use strict';

angular.module('asotafApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/explorer', {
        templateUrl: 'app/explorer/explorer.html',
        controller: 'ExplorerCtrl'
      });
  });