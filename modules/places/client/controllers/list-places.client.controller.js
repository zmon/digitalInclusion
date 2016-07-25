(function () {
  'use strict';

  angular
    .module('places')
    .controller('PlacesListController', PlacesListController);

  PlacesListController.$inject = ['PlacesService'];

  function PlacesListController(PlacesService) {
    var vm = this;

    vm.places = PlacesService.query();
    console.log(vm.places);
  }
}());
