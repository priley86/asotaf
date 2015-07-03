'use strict';

angular.module('asotafApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search/text/:text', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });