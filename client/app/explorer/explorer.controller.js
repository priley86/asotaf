'use strict';

angular.module('asotafApp')
  .controller('ExplorerCtrl', function ($scope, $http) {

    $http.get('topics.json').success(function(data) {
       $scope.topics = data;
    });
    
  });
