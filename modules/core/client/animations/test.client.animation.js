  angular.module('core').animation('.fold-animation', ['$animateCss', function($animateCss) {
    return {
      enter: function(element, doneFn) {
        var height = element[0].offsetHeight;
        console.log('height');
        console.log(height);
        return $animateCss(element, {
          from: { height:'0px' },
          to: { height:height + 'px' },
          duration: 10 // one second
        });
      }
    }
  }]);