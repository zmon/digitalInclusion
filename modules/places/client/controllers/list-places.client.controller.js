(function () {
  'use strict';

  angular
    .module('places')
    .controller('PlacesListController', PlacesListController);

  PlacesListController.$inject = ['$scope', 'ListPlacesService', 'getPlacesService', '$http'];

  function PlacesListController($scope, ListPlacesService, getPlacesService, $http) {
    
    var vm = this;
    var i;

    var isps = [];
    $scope.isps = isps;

   //  function getIsps(places) {
   //  	console.log("getting Isps");
  	// 	var length = places.length;
  	// 	for (i=0;i<length;i++) {
  	// 		// console.log(places[i]);
  	// 		$scope.isps.push(places[i]);
  	// 	}
  	// };

  	$scope.places = getPlacesService.getPlaces(function(places) {
      $scope.places = places;
      var lng = $scope.places.length;
      var i;
      for (i = 0; i < lng; i++) {
        var place = $scope.places[i];
        var category = place.primaryCategory;
        if (category === "isp") {
          $scope.isps.push(place);
        };
      }
      // console.log($scope.isps.length);
	 });

    

  	$scope.oneAtATime = true;

	  $scope.groups = [
	    {
	      title: 'Dynamic Group Header - 1',
	      content: 'Dynamic Group Body - 1'
	    },
	    {
	      title: 'Dynamic Group Header - 2',
	      content: 'Dynamic Group Body - 2'
	    }
	  ];

	  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  $scope.addItem = function() {
	    var newItemNo = $scope.items.length + 1;
	    $scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
	    isCustomHeaderOpen: false,
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };













	  
  }
}());
