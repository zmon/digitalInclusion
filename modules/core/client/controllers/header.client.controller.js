(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  console.log("header 1");

  HeaderController.$inject = ['$scope', '$state', 'Authentication', 'menuService'];

  function HeaderController($scope, $state, Authentication, menuService) {
    var vm = this;

    // vm.accountMenu = menuService.getMenu('account').items[0];
    console.log("header 2");
    vm.homeMenu = menuService.getMenu('home').items[0];
    vm.showHomeMenu = true;
    vm.authentication = Authentication;
    vm.isCollapsed = false;
    // vm.menu = menuService.getMenu('topbar');
    // vm.menu = menuService.getMenu('home');
    console.log(vm.homeMenu);

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);


    $scope.onOff = false;




    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
    }


    var headH = angular.element(document.getElementById("headerH1"));
    var headP = angular.element(document.getElementById("headerP"));
    var main  = angular.element(document.getElementById("main"));
    // var tabs  = angular.element(document.getElementById("tabset"));
   

    var header = angular.element(document.getElementById("header"));
    
    setTimeout(function(){
        console.log("timeOutZ");
        console.log(header);
        header.removeClass("am-flip-x")
        header.addClass("am-flip-x-remove");
        // header.addClass("pt-page-moveToRightEasing");
    }, 100);






  }
}());
