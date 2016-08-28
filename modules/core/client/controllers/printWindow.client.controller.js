(function () {
	'use strict';

	angular
		.module('core.map')
		.controller('PrintWindowController', PrintWindowController);
		
	PrintWindowController.$inject = ['$scope', '$window', 'PlacesService'];

	function PrintWindowController($scope, $window, PlacesService) {
	
		console.log("print window controller");



		$scope.showPm = function(position) {
			// console.log("showPm");
			// console.log($scope);
			var latLng = [position[0], position[1]];

	      	$scope.pmOptions = {
	        	center: {lat: latLng[0], lng: latLng[1]},
	        	zoom: 19,
	        	mapTypeId: google.maps.MapTypeId.ROADMAP
	      	};

	      	$scope.printableMap = new google.maps.Map(document.getElementById('printableMap'), $scope.pmOptions);

		}


		

		// console.log("InfoWindowController 1");
		
		


   
	
  }



	
}());
