// angular.module('core', ['ngMaterial'])
// .controller('CardController', function($scope) {
  
// })
// .config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
//   $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
//   $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
//   $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
// });


(function () {
  'use strict';

  angular
    .module('core')
    .controller('CardController', CardController);

  CardController.$inject = ['$scope'];

  function CardController($scope) {
  	$scope.imagePath = 'img/washedout.png';
  }

  angular
    .module('core').config(function($mdThemingProvider) {
    	console.log("le card reader {{{{{{{{{{{{{         $mdThemingProvider");
    	console.log($mdThemingProvider);
	  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
	  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
	  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
	  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });

  angular
  	.module('core').config(['$mdIconProvider', function($mdIconProvider) {
  		console.log("$mdIconProvider");
  		console.log($mdIconProvider);
	  $mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
	}])
}());