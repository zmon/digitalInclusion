(function () {
  'use strict';

  angular
    .module('core')
    .controller('MarkerController', MarkerController);

  MarkerController.$inject = ['$scope', '$http', '$parent'];

  function MarkerController($scope, $http, $parent) {
    var vm = this;
   	// $scope.isps = [];
   	console.log("MarkerController 1");
   	console.log($scope.parent.map);
   //  $http.get('/api/places').success(function(data){
  	// 	sortResponses(data);
  	// }).error(function(err) {
  		// console.log('err');
  		// console.log(err);
  	// });





	  


   
  }
}());
