'use strict';

angular.module('asotafApp')
  .controller('SearchCtrl', function ($scope, $http, $routeParams) {
    $scope.tinfoils = undefined;

    console.log($routeParams)
    $http.get('/api/tinfoil/search/' + $routeParams.text).success(function(tinfoils) {
      $scope.tinfoils = tinfoils;
    });
  });
