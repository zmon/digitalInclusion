(function () {
  'use strict';

  angular
    .module('core')
    .controller('TestController', TestController);

  TestController.$inject = ['$scope', '$window', '$mdColorPalette'];

  function TestController($scope, $window, $mdColorPalette) {
    console.log("$mdColorPalette");
    console.log($mdColorPalette);
    console.log(Object.keys($mdColorPalette));
    $scope.colors = Object.keys($mdColorPalette);
    $scope.mdURL = 'https://www.google.com/design/spec/style/color.html#color-color-palette';
    $scope.primary = 'purple';
    $scope.accent = 'green';
    $scope.isPrimary = true;
    $scope.selectTheme = function (color) {
      if ($scope.isPrimary) {
        $scope.primary = color;
        $scope.isPrimary = false;
      }
      else {
        $scope.accent = color;
        $scope.isPrimary = true;
      }
    };



  }


}());