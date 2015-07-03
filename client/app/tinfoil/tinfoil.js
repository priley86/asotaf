'use strict';

angular.module('asotafApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tinfoil', {
        templateUrl: 'app/tinfoil/tinfoil.html',
        controller: 'TinfoilCtrl'
      });
  });