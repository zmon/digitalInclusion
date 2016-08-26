(function () {
  'use strict';

  angular
    .module('places')
    .controller('PlacesController', PlacesController);

  PlacesController.$inject = ['$scope', '$state', 'placeResolve', '$window', 'Authentication', 'findPlacesByZipService'];

  // console.log("places.client.controller-1");

  function PlacesController($scope, $state, place, $window, Authentication, findPlacesByZipService) {

    var vm = this;

    vm.place = place;
    vm.category = vm.place.primaryCategory;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    $scope.categoryOptions = [
      { value: "wifi-free", label: "Free WiFi"}, 
      { value: "wifi-customer", label: "Customer WiFi"}, 
      { value: "computers-access", label: "Public Computer Access"}, 
      { value: "computers-retail", label: "Low Cost or Refurb. Equipment" },
      { value: "training-day", label: "Day Courses" },
      { value: "training-night", label: "Evening Courses " }
    ];

    $scope.locationTypes = [
      { value: "Library", label: "Library" },
      { value: "Community Center", label: "Community Center" },
      { value: "Restaurant", label: "Restaurant" },
      { value: "Coffee Shop", label: "Coffee Shop" },
      { value: "Shopping Mall", label: "Shopping Mall"}
    ];

    $scope.lt768 = false;
    $scope.gt768 = false;

    // <select name="locationType" ng-model="vm.place.locationType" id="locationType" class="form-control">
    //   <option value="library">Library</option>
    //   <option value="community-center">Community Center</option>
    //   <option value="restaurant">Restaurant</option>
    //   <option value="coffee-shop">Coffee Shop</option>
    //   <option value="shopping-mall">Shopping Mall</option>
    // </select>

    console.log("before");
    console.log("places.client.controller-2");
    console.log("after");
    console.log(vm.place);
    // console.log(place);

    function getCurrentWidth() {
      // console.log("getCurrentWidth");
      // console.log($window.innerWidth);
      return $window.innerWidth;
    }


    $scope.pageWidth = getCurrentWidth();

    if ($scope.pageWidth < 768) {
      $scope.lt768 = true;
    } else if ($scope.pageWidth >= 768) {
      $scope.gt768 = true;
    }
    

    $scope.retail = new Boolean();
    $scope.dayTraining = new Boolean();
    $scope.nightTraining = new Boolean();
    $scope.publicWifi = new Boolean();
    $scope.customerWifi = new Boolean();
    $scope.computerAccess = new Boolean();

    // console.log("load page");
   
    function sortByCategories(str) {
      console.log("sortByCategories");
      console.log(str);
      if (str === "computers-retail") {
        $scope.retail = true;
        console.log($scope.retail);
      } else if (str === "computers-access") {
        $scope.computerAccess = true;
      } else if (str === "training-day") {
        $scope.dayTraining = true;
      } else if (str === "training-night") {
        $scope.nightTraining = true;
      } else if (str === "wifi-free") {
        $scope.publicWifi = true;
      } else if (str === "wifi-customer") {
        $scope.customerWifi = true;
      }

    }

    sortByCategories(vm.category);

    // Remove existing Place
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.place.$remove($state.go('places.list'));
      }
    }

    // Save Place
    function save(isValid) {
      console.log("save");
      console.log(this.form.placeForm);
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.placeForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.place._id) {
        vm.place.$update(successCallback, errorCallback);
      } else {
        vm.place.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        console.log("successCallback");
        console.log(res);
        $state.go('places.view', {
          placeId: res._id
        });
      }

      function errorCallback(res) {
        console.log("errorCallback");
        console.log(res);
        vm.error = res.data.message;
      }
    }


    $scope.findById = function(id) {
      $scope.place = Places.get({
        placedId: id
      });
    };
  }
}());
