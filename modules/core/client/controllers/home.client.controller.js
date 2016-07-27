(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['PlacesService', 'spinnerService', '$scope'];

  function HomeController(PlacesService, spinnerService, $scope) {
    var vm = this;
    vm.places = PlacesService.query();

    
    
    // spinnerService.show('mapSpinner');
  }

  // console.log("home.client.controller - 1");
}());
