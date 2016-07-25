angular.module('core.modal').controller('ModalController', function ($scope, $uibModal, $log) {


  var newPlace = "<form name='placeForm' class='form-horizontal' ng-submit='create(placeForm.$valid)' novalidate><fieldset><div class'form-group' show-errors><label for='title'>Title</label><input name='title' type='text' ng-model='title' id='title' class='form-control' placeholder='Title' required><div ng-messages='placeForm.title.$error' role='alert'><p class='help-block error-text' ng-message='required'>Place title is required.</p></div></div><div class='form-group'><label for='desc'>Description</label><textarea name='desc' ng-model='desc' id='desc' class='form-control' cols='30' rows='10' placeholder='Description (200 characters or less)'></textarea></div><div class='form-group'><input type='submit' class='btn btn-default'></div><div ng-show='error' class='text-danger'><strong ng-bind='error'></strong></div></fieldset></form>";


  var item1 = {name: 'Public', html: "<h1>ayg</h1>"};
  var item2 = {name: 'Customer Only', html: "<h1>backdrop</h1>"};
 
  $scope.items = [item1, item2];

  $scope.animationsEnabled = true;

  $scope.updateStatus = function () {
  	$scope.status = "updarted";
  	console.log("function function");
  	$log.info("info");
  };

  $scope.newLocation = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      // backdrop: false,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'newLocationModal.html',
      backdropUrl: '/modules/core/client/views/templates/backdrop.client.view.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
        $log.info("yes")
      } else {
        $log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      //  $log.info('true');
      // } else {
      //  $log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.newHotspot = function (size) {
    console.log("open modal a");
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      // backdrop: true,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'newHotspotModal.html',
      backdrop: 'bdrop.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
      	$log.info("yes")
      } else {
      	$log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      // 	$log.info('true');
      // } else {
      // 	$log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.newTrainingLocation = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      // backdrop: false,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'newTrainingLocationModal.html',
      backdropUrl: '/modules/core/client/views/templates/backdrop.client.view.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
      	$log.info("yes")
      } else {
      	$log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      // 	$log.info('true');
      // } else {
      // 	$log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.newPublicAccessLocation = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      // backdrop: false,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'newPublicAccessLocationModal.html',
      backdropUrl: '/modules/core/client/views/templates/backdrop.client.view.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
      	$log.info("yes")
      } else {
      	$log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      // 	$log.info('true');
      // } else {
      // 	$log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.newLowCostResellerLocation = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      // backdrop: false,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'newLowCostResellerLocationModal.html',
      backdropUrl: '/modules/core/client/views/templates/backdrop.client.view.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
      	$log.info("yes")
      } else {
      	$log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      // 	$log.info('true');
      // } else {
      // 	$log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.openE = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      backdrop: false,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'eModal.html',
      backdropUrl: '/modules/core/client/views/templates/backdrop.client.view.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
      	$log.info("yes")
      } else {
      	$log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      // 	$log.info('true');
      // } else {
      // 	$log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };

  $scope.openF = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      backdrop: false,
      bindToController: true,
      controllerAs: 'ModalInstanceController',
      templateUrl: 'fModal.html',
      backdropUrl: '/modules/core/client/views/templates/backdrop.client.view.html',
      windowTemplateUrl: '/modules/core/client/views/templates/window.client.view.html',
      windowTopClass: 'wintop',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
      // $scope.updateStatus;

      if (selectedItem == item1.name) {
      	$log.info("yes")
      } else {
      	$log.info("not yes")
      };
      // $scope.html = selected
      // console.log("selected " + $scope.selected);
      // if (selectedItem.name == 'item1') {
      // 	$log.info('true');
      // } else {
      // 	$log.info('untrue');
      // }
      // selectedItem.html;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };




  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});



