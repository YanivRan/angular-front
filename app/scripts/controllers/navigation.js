'use strict';
angular.module('swFrontApp')
  .controller('NavigationCtrl', function ($scope, $location, $resource) {
  	$scope.isActive = function(path){
  		var currentpath = $location.path().split('/')[1].split('?')[0];
  		return currentpath === path.split('/')[1]; 
  	};
  });