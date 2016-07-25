(function () {
  'use strict';

  angular
    .module('core')
    .controller('InternetController', InternetController);

  InternetController.$inject = ['$scope', '$state', 'Authentication', 'menuService', '$http'];

  function InternetController($scope, $state, Authentication, menuService, $http) {
    var vm = this;
   	$scope.isps = [];

    var master = $http.get('/api/places').success(function(data){
  		console.log("success");
  		sortResponses(data);
  	}).error(function(err) {
  		console.log('err');
  		console.log(err);
  	});


  	function sortResponses(places) {
  		console.log("sort");
  		console.log(places);
  		var length = places.length;
  		console.log(length);
  		var i;
  		for (i = 0; i < length; i++) {
	        var place = places[i];
	        // console.log(place);
	        var category = place.primaryCategory;
	        if (category === "isp") {
	           // list.access.push(place);
	           $scope.isps.push(place);
	        } 
	      }

  		
  	}


	  

	  	function getIsps(array) {
	  		var i;
	  		var l = array.length;

	  		for (i=0;i<l;i++) {
	  			if (array[i].primaryCategory === "isp") {
	  				$scope.isps.push(array[i]);
	  			}
	  		}
	  	}

   
  }
}());
