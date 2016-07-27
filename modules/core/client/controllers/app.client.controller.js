// angular.module('core',
//     ['ngMaterial', 'ngMessages']).controller('AppCtrl', function($scope) {
	
// });

(function () {
	'use strict';

	angular
		.module('core')
		.controller('AppController', AppController);
		
	AppController.$inject = ['$scope', '$location', 'PlacesService'];
	// console.log("map.client.controller - 1");
	function AppController($scope, $location, PlacesService) {
	


		  $scope.myDate = new Date();

		  $scope.minDate = new Date(
		      $scope.myDate.getFullYear(),
		      $scope.myDate.getMonth() - 2,
		      $scope.myDate.getDate());

		  $scope.maxDate = new Date(
		      $scope.myDate.getFullYear(),
		      $scope.myDate.getMonth() + 2,
		      $scope.myDate.getDate());

		  $scope.onlyWeekendsPredicate = function(date) {
		    var day = date.getDay();
		    return day === 0 || day === 6;
		  };


		// console.log("InfoWindowController 1");
		
		


   
	
  }



	
}());
