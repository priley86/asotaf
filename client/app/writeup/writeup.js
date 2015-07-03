'use strict';

angular.module('asotafApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/writeup/id/:id', {
        templateUrl: 'app/writeup/writeup.html',
        controller: 'WriteupCtrl'
      });
  });