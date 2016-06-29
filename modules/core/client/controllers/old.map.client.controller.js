'use strict';

var showMarkers               = {
                                  trainingClasses: new Boolean(),
                                  computerRetail: new Boolean(),
                                  freeWifi: new Boolean(),
                                  publicComputers: new Boolean()
                                };

function onGoogleReady() {
  angular.bootstrap(document.getElementById("rcMap"), ['core.map']);
  showMarkers.freeWifi        = true;
  showMarkers.publicComputers = false;
  showMarkers.computerRetail  = false;
  showMarkers.trainingClasses = false;
}

angular.module('core.map', ['ngResource']).controller('MnapController', ['$scope', '$window', '$timeout', '$http', '$state', '$stateParams', 'Authentication', 'getPlacesService', 'findPlacesByZipService', 'Places', '$location',
    function ($scope, $window, $timeout, $http, $state, $stateParams, Authentication, getPlacesService, $location, findPlacesByZipService, Places) {
   
    $scope.array              =    { 
                                     wifi      : { free  : [], customer: [] },
                                     computers : { retail: [], access  : [] },
                                     training  : { day   : [], night   : [] }, 
                                     isps      : []
                                    };

    $scope.markers            =  { 
                                   wifi      : { free   : [], customer : [] },
                                   computers : { retail : [], access   : [] },
                                   training  : { day    : [], night    : [] }, 
                                   isps      : []
                                 };

    var e1                    = angular.element(document.getElementById("e1"));
    var e2                    = angular.element(document.getElementById("e2"));
    var e3                    = angular.element(document.getElementById("e3"));
    var e4                    = angular.element(document.getElementById("e4"));

    var mapCanvasElement      = document.getElementById("rcMap");
    var sideWindowElement     = document.getElementById("sw");

    $scope.browserSupportFlag = new Boolean();
    $scope.lat                = "0";
    $scope.lng                = "0";
    $scope.accuracy           = "0";
    $scope.error              = "";
    $scope.siteVisitor;
    $scope.id;
    $scope.watchOptions;

    var iconoriginx           = null;
    var iconoriginy           = null;
    var iconSize              = new google.maps.Size(30, 30);
    var iconAnchor            = new google.maps.Point(15, 30);

    function resetToNormal() {
      var arr = [e1,e2,e3,e4];
      var i; 
      var n = arr.length;
      var elem;
      for (i=0;i<4;i++) {
        arr[i].removeClass('special') && arr[i].addClass('normal');
      }
    }

    function clearAll() {
      clearWifiMarkers(); 
      clearAccessMarkers();
      clearTrainingMarkers();
      clearRetailMarkers();
    }

    function callback(data) {
      var i;
      var length = data.length;
      resetToNormal();
      clearAll();
      for (i = 0; i < length; i++) {
        var place = data[i];
        createMarker(place);
      }
    }

    $scope.searchByZip = function(zipcode) {
      var body = {zip: zipcode};
      $http.post('/api/places/query', body).success(function(data) {
        callback(data);
      });
    }

    $scope.place = {
      zip: ""
    }

    $scope.resetForm = function() {
      $scope.place.zip = '';
    };


    var callMethod = function() {
       console.log("search results");
       console.log($scope.searchResults);
    };


    var counter = 0;
    function incrementToLimit(num) {
      console.log(num + " reaching limit =>" + limit);
    }

    $scope.places = getPlacesService.getPlaces(function(places) {
      $scope.places = places;
      var lng = $scope.places.length;
      var i;
      for (i = 0; i < lng; i++) {
        var place = $scope.places[i];
        var category = place.primaryCategory;
        if (category === "computers-access") {
           $scope.array.computers.access.push(place);
        } else if (category === "training-day") {
           $scope.array.training.day.push(place);
        } else if (category === "training-night") {
           $scope.array.training.night.push(place);
        } else if (category === "wifi-free") {
           $scope.array.wifi.free.push(place);
        } else if (category === "wifi-customer") {
          $scope.array.wifi.customer.push(place);
        } else if (category === "computers-retail") {
          $scope.array.computers.retail.push(place);
        } else if (category === "isp") {
          $scope.array.isps.push(place);
        };
      }
	  });

    function setWifiMarkers() {
      var frLocations = $scope.array.wifi.free;
      var coLocations = $scope.array.wifi.customer;
      var i;
      var n;
      var frLength = frLocations.length;
      var coLength = coLocations.length;
      for (i=0; i<frLength; i++) {
        var place = frLocations[i];
        createMarker(place);
        
      }
      for (n=0;n<coLength;n++){
        var place = coLocations[n];
        createMarker(place);
      }
    }

    $scope.setInitial = function() {
      setWifiMarkers();
    }

    function setTrainingMarkers() {
      console.log("setTrainingMarkers");
      var dayLocations = $scope.array.training.day;
      var nightLocations = $scope.array.training.night;
      console.log(dayLocations);
      console.log(nightLocations);
      var i;
      var n;
      var dayLength=dayLocations.length;
      var nightLength = nightLocations.length;
      for (i=0;i<dayLength;i++){
        var place = dayLocations[i];
        createMarker(place);
      }
      for (n=0;n<nightLength;n++){
        var place = nightLocations[n];
        createMarker(place);
      }
    }

    function setAccessMarkers(){
      var locations = $scope.array.computers.access;
      var i;
      var length = locations.length;
      for (i=0;i<length;i++){
        var place = locations[i];
        createMarker(place);
      }
    }

    function setRetailMarkers(){
      var locations = $scope.array.computers.retail;
      var i;
      var length = locations.length;
      for (i=0;i<length;i++){
        var place = locations[i];
        createMarker(place);
      }
    }



    function getIcon(category) {
      if (category === "computers-access") {
       return "modules/core/client/img/computerAccess.png";
      } else if (category === "training-day") {
       return "modules/core/client/img/userOrange.png";
      } else if (category === "training-night") {
       return "modules/core/client/img/userBlue.png";
      } else if (category === "wifi-free") {
       return "modules/core/client/img/wifiFree-2.png";
      } else if (category === "wifi-customer") {
       return "modules/core/client/img/wifiCustomerOnly.png";
      } else if (category === "computers-retail") {
       return "modules/core/client/img/computerRetail.png";
      } else if (category === "isp") {
       return "modules/core/client/img/internetService.png";
      };
    }

    function addListener(json, marker) {
      // console.log("listener");
      // console.log(json);
      google.maps.event.addListener(marker, 'click', function(){
        resizeMap();
        var anchor = new google.maps.MVCObject();
        anchor.set("position",event.latLng);
        var target = json.url;
        var html = "<a ng-href='" + target +"'>" + "Visit website" + "</a>";
        var container = document.getElementById('info-wrapper');
        var desc = json.description;
        var descriptor = document.getElementById('placeDescription');
        var l = desc.length;
        if (l < 42 || l === null) {
          descriptor.style.textAlign = "center";
        } else {
          descriptor.style.textAlign = "justify";
        }
        document.getElementById('placeCategory').textContent = json.primaryCategory;
        document.getElementById('placeTitle').textContent = json.title;
        descriptor.textContent = desc;
        document.getElementById('placePhone').textContent = json.phone;
        document.getElementById('placeAddress').textContent = json.address1;
        document.getElementById('placeCity').textContent = json.city;
        document.getElementById('placeState').textContent = json.state;
        document.getElementById('placeZip').textContent = json.zip;
      });
    }

    function createMarker(json) {

      var category = json.primaryCategory;
      var iconUrl = getIcon(category);

      var image = new google.maps.MarkerImage(
                                               iconUrl,
                                               new google.maps.Size(71, 71),
                                               new google.maps.Point(0, 0),
                                               new google.maps.Point(17, 34),
                                               new google.maps.Size(25, 25)
                                             );

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(json.location[0].lat, json.location[0].lng),
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        icon: image,
        title: json.title
      });

      addListener(json, marker);

      if (category === "computers-access") {
         $scope.markers.computers.access.push(marker);
      } else if (category === "training-day") {  
          $scope.markers.training.day.push(marker);
      } else if (category === "training-night") {  
          $scope.markers.training.night.push(marker);
      } else if (category === "wifi-free") {
         $scope.markers.wifi.free.push(marker);
      } else if (category === "wifi-customer") {
         $scope.markers.wifi.customer.push(marker);
      } else if (category === "computers-retail") {
         $scope.markers.computers.retail.push(marker);
      } else if (category === "isp") {
         //
      };
    };

    function clearWifiMarkers() {
      var freeWifiSpots     = $scope.markers.wifi.free;
      var customerWifiSpots = $scope.markers.wifi.customer;
      var i;
      var n;
      var l = freeWifiSpots.length; 
      var m = customerWifiSpots.length;
      for (i=0;i<l;i++) {
        freeWifiSpots[i].setMap(null);
      }
      freeWifiSpots=[];
      for (n=0;n<m;n++){
        customerWifiSpots[n].setMap(null);
      }
      customerWifiSpots=[];
    }
    
    function clearTrainingMarkers() {
      console.log('clearTrainingMarkers');
      var dayCourses = $scope.markers.training.day;
      var nightCourses = $scope.markers.training.night;
      for (var i = 0; i < dayCourses.length; i++) {
        dayCourses[i].setMap(null);
      }
      for (var i = 0; i < nightCourses.length; i++) {
        nightCourses[i].setMap(null);
      }
      dayCourses = [];
      nightCourses = [];
    }

    function clearAccessMarkers() {
      var markers = $scope.markers.computers.access;
      var i;
      var length = markers.length;
      for (i=0; i<length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function clearRetailMarkers() {
      var markers = $scope.markers.computers.retail;
      var i; 
      var length = markers.length;
      for (i=0;i<length;i++){
        markers[i].setMap(null);
      }
      markers = [];
    }

    function resetCss(elm, boolean) {
      if (boolean) {
        elm.removeClass('button normal fit small');
        elm.addClass('button special fit small');
      } else {
        elm.removeClass('button special fit small');
        elm.addClass('button normal fit small');
      }
    }

    $scope.trainingVisibility = new Boolean();
    $scope.toggleTrainingMarkers = function() {
      if ($scope.trainingVisibility) {
        console.log('true');
        resetCss(e2, true);
        setTrainingMarkers();
        $scope.trainingVisibility = false;
      } else {
        console.log('false');
        resetCss(e2, false);
        clearTrainingMarkers();
        $scope.trainingVisibility = true;
      }
    }

    $scope.computersVisibility = new Boolean();
    $scope.toggleComputersMarkers = function() {
      if ($scope.computersVisibility) {
        console.log('true');
        resetCss(e3, true);
        setAccessMarkers();
        $scope.computersVisibility = false;
      } else {
        console.log('false');
        resetCss(e3, false);
        clearAccessMarkers();
        $scope.computersVisibility = true;
      }
    }

    $scope.wifiVisibility = new Boolean();
    $scope.toggleWifiMarkers = function() {
      if ($scope.wifiVisibility) {
        console.log('true');
        resetCss(e1, true);
        setWifiMarkers();
        $scope.wifiVisibility = false;
      } else {
        console.log('false');
        resetCss(e1, false);
        clearWifiMarkers();
        $scope.wifiVisibility = true;
      }
    }

    $scope.refurbsVisibility = new Boolean();
    $scope.toggleRefurbsMarkers = function() {
      if ($scope.refurbsVisibility) {
        console.log('true');
        resetCss(e4, true);
        setRetailMarkers();
        $scope.refurbsVisibility = false;
      } else {
        console.log('false');
        resetCss(e4, false);
        clearRetailMarkers();
        $scope.refurbsVisibility = true;
      }
    }

    $scope.success = function (pos) {
      var coords = pos.coords;
      if ($scope.visitor.latitude === coords.latitude && $scope.visitor.longitude === coords.longitude) {
        console.log('$scope.visitor');
        navigator.geolocation.clearWatch(id);
      }
    }

    // $scope.geolocationError = function (err) {
    //   console.warn('ERROR(' + err.code + '): ' + err.message);
    // }

    $scope.visitor = {
      latitude : 0,
      longitude: 0
    };

    $scope.watchOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    $scope.id = navigator.geolocation.watchPosition($scope.success, $scope.geolocationError, $scope.watchOptions);

    $scope.showResult = function () {
        return $scope.error == "";
    }

    function removeWindow() {
      sideWindowElement.style.display = "none";
      mapCanvasElement.style.width = "100%";

    }

    var resizeMap = function() {
      mapCanvasElement.style.width = "60%";
      sideWindowElement.style.display = "initial";
    }

    $scope.showError = function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          $scope.error = "User denied the request for Geolocation."
          break;
        case error.POSITION_UNAVAILABLE:
          $scope.error = "Location information is unavailable."
          break;
        case error.TIMEOUT:
          $scope.error = "The request to get user location timed out."
          break;
        case error.UNKNOWN_ERROR:
          $scope.error = "An unknown error occurred."
          break;
      }
      $scope.$apply();
    }

    $scope.getLocation = function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.showMap, $scope.showError);
      }
      else {
        $scope.error = "Geolocation is not supported by this browser.";
      }
    }

    $scope.isLoaded = new Boolean(false);
    console.log('isLoaded1');
    console.log($scope.isLoaded);

    $scope.showMap = function(position) {
      
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;
      $scope.accuracy = position.coords.accuracy;

      $scope.mapOptions = {
        center: {lat: $scope.lat, lng: $scope.lng},
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById('rcMap'), $scope.mapOptions);
      $scope.input = document.getElementById('plac');
      $scope.searchBox = new google.maps.places.SearchBox($scope.input);
      $scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push($scope.input);
      $scope.initialLocation = new google.maps.LatLng($scope.lat, $scope.lng);

      var marker = new google.maps.Marker({
          position: $scope.initialLocation,
          animation: google.maps.Animation.DROP,
          map: $scope.map,
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      });

      $scope.isLoaded = true;
      console.log('isLoaded2');
      console.log($scope.isLoaded);

      setWifiMarkers();
      // $scope.

      $scope.removeWindow = function() { 
        removeWindow();
      }

      var center;

      function calculateCenter() {
        center = $scope.map.getCenter();
      }

      google.maps.event.addDomListener($scope.map, 'idle', function() {
        calculateCenter();
      });

      google.maps.event.addDomListener(window, 'resize', function() {
        console.log("resizing");
        $scope.map.setCenter(center);
      });
        
      $scope.$apply();
    };

    $scope.getLocation();
  }
]);