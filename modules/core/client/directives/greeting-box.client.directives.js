angular.module('core').directive('greetingBox', ['$animate', function($animate) {
  return function(scope, element, attrs) {
    attrs.$observe('active', function(value) {
      value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
    });
  };
}]);