(function () {
  'use strict';

  angular
    .module('places')
    .controller('PlacesListController', PlacesListController);

  PlacesListController.$inject = ['PlacesService', '$window', '$scope'];

  function PlacesListController(PlacesService, $window, $scope) {
    var vm = this;
    $scope.scrollToTop = function() {
      console.log($window);
      $window.scrollTo(0,0);
    }

    function sortOn(property){
        return function(a, b){
            if(a[property] < b[property]) {
                return -1;
            } else if (a[property] > b[property]) {
                return 1;
            } else {
                return 0;   
            }
        }
    }


    vm.places = PlacesService.query();
    $scope.alphabeticalPlaces = [];
    $scope.missingPlaces = [];

    // var ln = vm.places.length;
    // var i;
    // for (i=0;i<ln;i++) {
    //   $scope.alphabeticalPlaces.push(vm.places[i]);
    // }
    $scope.alphabeticalPlaces.sort(sortOn('title'));

    console.log("places");
    console.log(vm.places);
   

    // vm.alphabeticalPlaces = alphabeticalPlaces;


    

    
    $scope.showAlpha = false;
    $scope.showMissing = false;
    $scope.showNormal = true;

    $scope.resetResults = function() {
      $scope.showAlpha = false;
      $scope.showMissing = false;
      $scope.showNormal = true;
    }

    function setInvisibility(arr) {
      var l = arr.length;
      var i;
      for (i=0;i<l;i++) {
        if (typeof arr[i].phone != 'undefined') {

        }
      }
    }

    $scope.missingZips = function() {
      console.log("missingZips");
      console.log();
      $scope.showNormal = false;
      $scope.showMissing = true;
      var ln = vm.places.length;
      var i;
      for (i=0;i<ln;i++) {
        $scope.missingPlaces.push(vm.places[i]);
      }
     
    }

    $scope.sortAlphabetical = function() {
      console.log("alphabeticalPlaces");
      console.log($scope.alphabeticalPlaces);
      $scope.showNormal = false;
      $scope.showAlpha = true;
      console.log("sortAlphabetical()");
      var ln = vm.places.length;
      var i;
      for (i=0;i<ln;i++) {
        $scope.alphabeticalPlaces.push(vm.places[i]);
      }
      $scope.alphabeticalPlaces.sort(sortOn('title'));
      // $scope.alphabeticalPlaces.sort(sortOn('title'));
      console.log($scope.alphabeticalPlaces);
    }

  }
}());
