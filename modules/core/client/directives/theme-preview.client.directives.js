(function () {
	'use strict';

	angular
	.module('core')
	.directive('themePreview', themePreview);


	function themePreview() {
		return {
        restrict: 'E',
        templateUrl: '/modules/core/client/views/templates/themePreview.tmpl.html',
        scope: {
          primary: '=',
          accent: '='
        },
        controller: function ($scope, $mdColors, $mdColorUtil) {
          $scope.getColor = function (color) {
            return $mdColorUtil.rgbaToHex($mdColors.getThemeColor(color))
          };
        }
      }
    }
}());