'use strict';

angular.module('asotafApp')
  .controller('TinfoilCtrl', function ($scope, $http) {
    $scope.tinfoils = [];

    $http.get('/api/tinfoil').success(function(tinfoils) {
      $scope.tinfoils = tinfoils;
    });

    $scope.addTinfoil = function() {
      if($scope.tinfoil === '') {
        return;
      }
      $http.post('/api/tinfoil', { name: $scope.newTinfoil });
      $scope.newTinfoil = '';
    };

    $scope.deleteTinfoil = function(tinfoil) {
      $http.delete('/api/tinfoil/' + tinfoil._id);
    };
  });
