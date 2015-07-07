'use strict';

angular.module('asotafApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/compendium', {
        templateUrl: 'app/compendium/compendium.html',
        controller: 'CompendiumCtrl'
      });
  });