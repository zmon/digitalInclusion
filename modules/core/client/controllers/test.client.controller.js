(function () {
  'use strict';

  angular
    .module('core')
    .controller('TestController', TestController);

  TestController.$inject = ['$scope', '$window'];

  function TestController($scope, $window) {

    $scope.onSwipeLeft = function(ev) {
      alert('You swiped left!!');
    };
    $scope.onSwipeRight = function(ev) {
      alert('You swiped right!!');
    };
    $scope.onSwipeUp = function(ev) {
      alert('You swiped up!!');
    };
    $scope.onSwipeDown = function(ev) {
      alert('You swiped down!!');
    };
  }


}());