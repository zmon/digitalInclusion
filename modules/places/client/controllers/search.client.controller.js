(function () {
  'use strict';


// Places controller
angular
  .module('places')
  .controller('SearchController', SearchController);

 SearchController.$inject = ['$scope', '$http', '$state', '$window', 'PlacesService'];
  
 function SearchController($scope, $http, $state, $window, PlacesService) {
    
    var vm = this;
    $scope.master = {};
    vm.places = PlacesService.query();
    vm.error  = null;
    vm.form   = {};
    // vm.remove = remove;
    vm.search = search;

    function search(zip) {
      $scope.master = angular.copy(zip);
      console.log(zip);
    	// vm.error = null;
    	// if (!isValid) {
	    //     $scope.$broadcast('show-errors-check-validity', 'vm.form.searchForm');

	    //     return false;
	    // } else {
     //    vm.places.$find(successCallback, errorCallback);
     //  }

      

      // if (vm.place._id) {
        // vm.place.$update(successCallback, errorCallback);
      // } 

      // function successCallback(res) {
      //   $state.go('places.view', {
      //     placeId: res._id
      //   });
      // }

      // function errorCallback(res) {
      //   vm.error = res.data.message;
      // }
	    // $http.post('/api/places/query', vm.zip).success(function (response) {
 
     //    console.log('post');

     //  }).error(function (response) {
     //    vm.error = response.message;
     //  });
    }
  }
}());