(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['PlacesService', 'spinnerService', '$scope', '$window', '$location'];

  function HomeController(PlacesService, spinnerService, $scope, $window, $location) {
    var vm = this;
    vm.places = PlacesService.query();

    $scope.scrollUp = function($window) {
      console.log("LLLL");
      $location.path('authentication/signin');
      $window.scrollTo(0,0);

    }
    
    // spinnerService.show('mapSpinner');
  }

  // console.log("home.client.controller - 1");
}());
