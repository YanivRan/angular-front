'use strict';
angular.module('swFrontApp')
  .controller('NavigationCtrl', function ($scope, $location, $resource) {
  	$scope.isActive = function(path){
  		return path === $location.path();
  	};
  });