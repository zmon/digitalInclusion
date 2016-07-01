(function () {
  'use strict';

  angular
    .module('core')
    .controller('AboutController', AboutController);

  AboutController.$inject = ['$scope'];

  function AboutController() {
    var vm = this;

    $scope.pageClass = 'page-about';
  }
}());
