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

    vm.places = PlacesService.query();
    console.log(vm.places);
  }
}());
