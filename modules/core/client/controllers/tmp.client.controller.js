(function () {
  'use strict';

  angular
    .module('core')
    .controller('BasicDemoCtrl', BasicDemoCtrl)
    .controller('PanelDialogCtrl', PanelDialogCtrl);

  PanelDialogCtrl.$inject = ['$http'];
  BasicDemoCtrl.$inject = ['$scope', '$mdPanel', '$location', '$http'];

  function BasicDemoCtrl($scope, $mdPanel, $location, $http) {
    this._mdPanel = $mdPanel;
    this._http = $http;

  // var vm = this;
    console.log(this.categoryOptions);

  }



  BasicDemoCtrl.prototype.showDialog = function() {
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();
    var config = {
      attachTo: angular.element(document.body),
      controller: PanelDialogCtrl,
      controllerAs: 'ctrl',
      disableParentScroll: this.disableParentScroll,
      template: 
        ' <div role="dialog" aria-label="Add place to map" layout="column" layout-align="center center"> ' +
        ' <div class="demo-dialog-content"><p>Add new place to map</p><div layout="row">' +

       
        '</div></div><div layout="row" class="demo-dialog-button">'+
         ' <form name="placeForm" class="form-horizontal c-mob-modal-form" ng-submit="create(placeForm)" novalidate> ' +
         ' <fieldset id="modalFst">  ' +
         '   <div class="form-section-custom-mobile">  ' +
         '     <div class="form-group" show-errors>  ' +
         '       <label class="control-label rep-lbl" for="title">Name *</label>  ' +
         '       <input name="title" type="text" ng-model="vm.place.title" id="title" class="form-control">  ' +
         '       <div ng-messages="vm.form.placeForm.title.$error" role="alert">  ' +
        '          <p class="help-block error-text" ng-message="required">Place title is required.</p>  ' +
         '       </div>  ' +
          '    </div>      ' + 


         '     <div class="form-group" show-errors>  ' +
         '       <label class="control-label rep-lbl" for="address1">Address *</label>  ' +
         '       <input name="address1" type="text" ng-model="vm.place.address1">  ' +
          '      <div ng-messages="vm.form.placeForm.address1.$error" role="alert">  ' +
           '       <p class="help-block error-text" ng-message="required">Address is required.</p>  ' +
            '    </div>  ' +
           

          
        '      </div>  ' +
         '     <div class="form-group" show-errors>  ' +
          '      <label class="control-label rep-lbl" for="city">City *</label>  ' +
           '     <input name="city" type="text" ng-model="vm.place.city" id="city" class="form-control">  ' +
            '  </div>  ' +
        '      <div class="form-group">  ' +
         '       <label class="control-label rep-lbl" for="state">State *</label>  ' +
          '      <select name="state" ng-model="vm.place.state" id="state" class="form-control">  ' +
           '       <option value="MO">Missouri</option>  ' +
            '      <option value="KS">Kansas</option>  ' +
        '        </select>  ' +
        '      </div>  ' +
         '     <div class="form-group" show-errors>  ' +
          '      <label class="control-label rep-lbl" for="zip">Zip Code *</label>  ' +
           '     <input name="zip" type="text" ng-model="vm.place.zip" id="zip" class="form-control">  ' +
            '  </div><br>  ' +


                      '    <div class="form-group" show-errors>  ' +
           '     <label class="control-label rep-lbl" for="phone">Phone *</label>  ' +
            '    <input name="phone" type="text" ng-model="vm.place.phone" id="phone" class="form-control">  ' +
             '   <div ng-messages="vm.form.placeForm.phone.$error" role="alert">  ' +
             '     <p class="help-block error-text" ng-message="required">Place phone number is required.</p>   ' +
         '       </div>    ' +
         '     </div>   ' +


         '     <div class="form-group" show-errors>    ' +
         '       <label class="control-label rep-lbl" for="url">Website<br>(<em>optional</em>)</label>   ' +
         '       <input name="url" type="text" ng-model="vm.place.url" id="url" class="form-control">   ' +
         '     </div>  ' +

   // this.categoryOptions = [
   //    { value: "wifi-free", label: "Free WiFi"}, 
   //    { value: "wifi-customer", label: "Customer WiFi"}, 
   //    { value: "computers-access", label: "Public Computer Access"}, 
   //    { value: "computers-retail", label: "Low Cost or Refurb. Equipment" },
   //    { value: "training-day", label: "Day Courses" },
   //    { value: "training-night", label: "Evening Courses " }
   //  ];




'  <div class="form-group" show-errors> ' +

 '  <label class="control-label rep-lbl" for="categories">Select all services offered (choose all that apply from list) *</label> ' +
                              '<select class="form-control" name="categories" ng-model="vm.place.categories" id="categories" multiple="true">' +
  '<option value="wifi-free">Free WiFi</option> '+
  '<option value="wifi-customer">Customer WiFi</option>' +
 ' <option value="computers-access">Public Computer Access</option>' +
 ' <option value="computers-retail">Low Cost Equipment</option>' +
 ' <option value="training-day">Day Courses</option>' +
 ' <option value="training-night">Evening Courses</option>' +
'</select></div>'+









  // ' <select selector multi="true" model="vm.place.categories" name="categories" options="categoryOptions" value-attr="value"></select> </div> ' +


                                  '  <div class="form-group"> '+
                                     '<label class="control-label rep-lbl" for="primaryCategory">Select a primary service category (choose one) *</label> '+

   '<select class="form-control" name="primaryCategory" ng-model="vm.place.primaryCategory" id="primaryCategory">' +
  '<option value="wifi-free">Free WiFi</option> '+
  '<option value="wifi-customer">Customer WiFi</option>' +
 ' <option value="computers-access">Public Computer Access</option>' +
 ' <option value="computers-retail">Low Cost Equipment</option>' +
 ' <option value="training-day">Day Courses</option>' +
 ' <option value="training-night">Evening Courses</option>' +
'</select>'+
                                      // '<select selector model="vm.place.primaryCategory" id="primaryCategory" name="primaryCategory" options="categoryOptions" value-attr="value"></select> '+



                               '     </div> ' +
                                    

                           

                                // '    <div class="form-group"> ' +
                                //    '   <label class="control-label rep-lbl" for="description">Description (<em>optional</em>)</label> ' +
                                //      ' <textarea name="description" data-ng-model="vm.place.description" id="description" class="form-control" cols="30" rows="4"></textarea> ' +
                                //    ' </div> ' +






             ' <div class="form-group"> ' +
              // '     <div class="form-group"> ' +


                  '<div id="close-modal-button"><md-button md-autofocus flex class="md-primary" ng-click="ctrl.closeDialog(); ctrl.sendData(placeForm)" type="submit">Submit</md-button></div>' +

              // '  <button type="submit" class="btn btn-default left-7">Submit</button> ' +





             ' </div>  ' +
            '  <div ng-show="vm.error" class="text-danger"> ' +
           '     <strong ng-bind="vm.error"></strong> ' +
          '    </div>  ' +
          '    <h3 class="custom-form-header"></h3>  ' +
          '    </div>  ' +
          '  </div>  ' +
         ' </fieldset>  ' +
        '</form><br> ' +

        // '<div id="close-modal-button"><md-button md-autofocus flex class="md-primary" ng-click="ctrl.closeDialog()">Close</md-button></div>'
        '</div>' +
        '</div>',
      hasBackdrop: true,
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };
    this._mdPanel.open(config);
  };
  
  function PanelDialogCtrl(mdPanelRef, $http) {
    this._mdPanelRef = mdPanelRef;
    this._http = $http;
    console.log("??");
    console.log($http);
    console.log(mdPanelRef);
    this.sendData = function(form) {
      console.log("sendData");
      var body = {
          title: form.title.$modelValue,
          address1: form.address1.$modelValue,
          city: form.city.$modelValue,
          state: form.state.$modelValue,
          zip: form.zip.$modelValue,
          phone: form.phone.$modelValue,
          url: form.url.$modelValue,
          categories: form.categories.$modelValue,
          primaryCategory: form.primaryCategory.$modelValue
        };

        console.log(body);
        // sendDataNow(body);
        this._http.post('/api/places', body).success(function(data) {
              console.log('place created');
              console.log(data);
              callback(data);
            });
    }
   
  }

  function callback(object) {
    console.log("hooray");
    // return {place: object};
    // $location.path('places/' + object._id);
    // $scope.ok();
    $location.path('confirm-new-resource/' + object._id);
  }


  PanelDialogCtrl.prototype.closeDialog = function() {
   
   
  




    
        // $http.post('/api/places', body).success(function(data) {
        //         console.log('place created');
        //         console.log(data);
        //         callback(data);
        //       });


    var panelRef = this._mdPanelRef;
    // panelRef && panelRef.close().then(function() {
    //   angular.element(document.querySelector('.demo-dialog-open-button')).focus();
    //   panelRef.destroy();
    // });
  };
  
}());