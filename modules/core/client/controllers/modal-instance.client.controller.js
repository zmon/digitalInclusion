// .controller('MyController', ['myService', function (myService) {

// }]);

angular.module('core.modal').controller('ModalInstanceController', function ($http, $scope, $uibModalInstance, items, $location, $state) {

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

  function callback(object) {
    console.log("hooray");
    // return {place: object};
    // $location.path('places/' + object._id);
    $scope.ok();
    $location.path('confirm-new-resource/' + object._id);
  }

  $scope.create = function(placeForm) {
    console.log("create");
    var form = placeForm;
    var body = {
      title: form.title.$modelValue,
      address1: form.address1.$modelValue,
      address2: form.address2.$modelValue,
      city: form.city.$modelValue,
      state: form.state.$modelValue,
      zip: form.zip.$modelValue,
      phone: form.phone.$modelValue,
      url: form.url.$modelValue,
      categories: form.categories.$modelValue,
      primaryCategory: form.primaryCategory.$modelValue,
      description: form.description.$modelValue
    };
    console.log(body);
    $http.post('/api/places', body).success(function(data) {
            console.log('place created');
            console.log(data);
            callback(data);
          });
  }


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