angular.module('core.modal').controller('ModalInstanceController', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  if ($scope.selected.item.name == 'Public') {
   
    $scope.formA = true;
  } else {
    console.log($scope.selected.item);
  }

  $scope.dry = function () {
    console.log("call");
    $scope.wait = "Created";
  };

  $scope.ok = function () {
    console.log("log");
    $scope.dry();
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.encode = function() {

  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

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
});