(function () {
  'use strict';

  angular
    .module('core')
    .controller('InternetController', InternetController);

  InternetController.$inject = ['$scope', '$state', 'Authentication', 'menuService', '$http'];

  function InternetController($scope, $state, Authentication, menuService, $http) {
    var vm = this;
   	$scope.isps = [];

    $http.get('/api/places').success(function(data){
  		sortResponses(data);
  	}).error(function(err) {
  		// console.log('err');
  		// console.log(err);
  	});


  	function sortResponses(places) {
  		var length = places.length;
  		var i;
  		for (i = 0; i < length; i++) {
	        var place = places[i];
	        var category = place.primaryCategory;
	        if (category === "isp") {
	           // list.access.push(place);
             // console.log(place);
             place.word = "the bird";
	           $scope.isps.push(place);
	        } 
	      }

  		
  	}


	  

	  	// function getIsps(array) {
	  	// 	var i;
	  	// 	var l = array.length;

	  	// 	for (i=0;i<l;i++) {
	  	// 		if (array[i].primaryCategory === "isp") {
	  	// 			$scope.isps.push(array[i]);
	  	// 		}
	  	// 	}
	  	// }

   
  }
}());
