'use strict';

angular.module('asotafApp')
  .controller('WriteupCtrl', function ($scope, $http, $routeParams) {
    $scope.tinfoil = undefined;

    console.log($routeParams)
    $http.get('/api/tinfoil/' + $routeParams.id).success(function(tinfoil) {
      $scope.tinfoil = tinfoil;
    });
  });
