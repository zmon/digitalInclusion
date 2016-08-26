(function () {
	'use strict';

	angular
	.module('core')
	.directive('mdJustified', mdJustified);


	function mdJustified() {
		return {
      restrict : 'A',
      compile : function(element, attrs)  {
        var layoutDirection = 'layout-'+ (attrs.mdJustified || "row");
        element.removeAttr('md-justified');
        element.addClass(layoutDirection);
        element.addClass("layout-align-space-between-stretch");
        return angular.noop;
      }
    };
  }
}());