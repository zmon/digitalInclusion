(function () {
  'use strict';

  angular
    .module('core')
    .controller('TestController', TestController);


  TestController.$inject = ['$scope', '$window'];

  function TestController($scope, $window) {

    $scope.boxClass = true;

    // var kids = parent.children();

    // $animate.leave(kids[0]); //stagger index=0
    // $animate.leave(kids[1]); //stagger index=1
    // $animate.leave(kids[2]); //stagger index=2
    // $animate.leave(kids[3]); //stagger index=3
    // $animate.leave(kids[4]); //stagger index=4

    // window.requestAnimationFrame(function() {
    //   //stagger has reset itself
    //   $animate.leave(kids[5]); //stagger index=0
    //   $animate.leave(kids[6]); //stagger index=1

    //   $scope.$digest();



    // });
        


    $scope.effects = [
        {name: 'Slide', className: 'slide'},
        {name: 'Slidedown', className: 'slidedown'},
        {name: 'Slideup', className: 'slideup'},
        {name: 'Pop in/out', className: 'pop'},
        {name: 'Fade in/out', className: 'fade'},
        {name: 'Flip', className: 'flip'},
        {name: 'Rotate', className: 'rotate'},
        {name: 'Slide + Pop in', className: 'slide-pop'}
    ];

    $scope.effect = $scope.effects[0].className;

    $scope.isActive = function(path) {
      if ($route.current && $route.current.regexp) {
        return $route.current.regexp.test(path);
      }
      return false;
    };




  }
}());

// var animationApp = angular.module('core', ['ngAnimate'])
// .animation('.fade', function() {
//   return {
//     enter: function(element, done) {
//       element.css('display', 'none');
//       $(element).fadeIn(1000, function() {
//         done();
//       });
//     },
//     leave: function(element, done) {
//       $(element).fadeOut(1000, function() {
//         done();
//       });
//     },
//     move: function(element, done) {
//       element.css('display', 'none');
//       $(element).slideDown(500, function() {
//         done();
//       });
//     }
//   }
// })