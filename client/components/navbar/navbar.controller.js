'use strict';

angular.module('asotafApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Tinfoil',
      'link': '/tinfoil'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    // Search
    $scope.text = "";
    $scope.submit = function() {
      if ($scope.text) {
        
      }
    }
  });