angular.module('ngAnimateChildren', ['ngAnimate', '$scope'])
.controller('AnimationController', function($scope) {
  this.animateChildren = false;
  this.enterElement = false;
  $scope.onOff = true;
});