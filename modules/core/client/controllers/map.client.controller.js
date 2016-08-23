function onGoogleReady() {
  angular.bootstrap(document.getElementById("customMap"), ['core.map']);
}

var list = {};
	list.access = [];
	list.wifi = [];

		
(function () {
	'use strict';

	angular
		.module('core.map')
		.controller('MapController', MapController);
		
	MapController.$inject = ['$scope', '$window', '$timeout', '$http', '$location', 'zipcode', 'PlacesService', 'zcPosition'];

	function MapController($scope, $window, $timeout, $http, $location, zipcode, PlacesService, zcPosition) {
    var browser = $window.navigator.appCodeName;
    // console.log(browser);
    // var broswer = $window.navigator.appCodeName;
   
    var zipcodes = zipcode.getZipcodes();

    $scope.smsFormOpen = false;

    var libertyMemorial = [39.081009, -94.585944];
    var eighteenthAndVine = [39.091804, -94.562090];

    var data = {     isps      : [],
                     wifi      : { free  : [], customer: [] },
                     computers : { retail: [], access  : [] },
                     training  : { day   : [], night   : [] }
                };

	    $scope.markers            =  { 
	                                   wifi      : { free   : [], customer : [] },
	                                   computers : { retail : [], access   : [] },
	                                   training  : { day    : [], night    : [] }, 
	                                   isps      : []
	                                 };

      $scope.places = [];


	    $scope.mapMarkers = [];
	    $scope.viewportActiveLocations = [];
	    $scope.closest = [];
	    $scope.closestMap = [];

      $scope.showMapControls = false

      $scope.bool = false

      var headerToggleId = document.getElementById('headerToggleId');

      
	    var e1                    = angular.element(document.getElementById("e1"));
	    var e2                    = angular.element(document.getElementById("e2"));
	    var e3                    = angular.element(document.getElementById("e3"));
	    var e4                    = angular.element(document.getElementById("e4"));

	    var mapCanvasElement      = document.getElementById("customMap");
	    var sideWindowElement     = document.getElementById("sw");
      var mobileWindowElement   = document.getElementById("wrapMobileWindow");
      var closeWinTag           = document.getElementById('closeWindow');
	    var resultsHtml           = document.getElementById("kv");
	    var iconoriginx           = null;
	    var iconoriginy           = null;
	    var iconSize              = new google.maps.Size(30, 30);
	    var iconAnchor            = new google.maps.Point(15, 30);

	    $scope.browserSupportFlag = false;
	    $scope.lat                = "0";
	    $scope.lng                = "0";
	    $scope.accuracy           = "0";
	    $scope.error              = "";
	    $scope.siteVisitor;
	    $scope.id;
	    $scope.watchOptions;


	    resultsHtml.style.display = "none";



     var svgW  = angular.element(document.getElementById("svgWrap"));
     var ngCm  = angular.element(document.getElementById("customMap"));
    

    setTimeout(function() {
        svgW.removeClass("vis-off");
        svgW.addClass("vis-on");
        $scope.loading = true;
        // header.addClass("pt-page-moveToRightEasing");
    }, 100);
    
    var vm = this;

      // var allPlaces = PlacesService.query();
      $scope.places = $http.get('/api/places').success(function(data){
        sortResponses(data);
      }).error(function(err) {
        console.log(err);
        return err;
      });


      function sortResponses(places) {
        var length = places.length;
        var i;
        for (i = 0; i < length; i++) {
            var place = places[i];
            // console.log(place);
            var category = place.primaryCategory;
            if (category === "computers-access") {
               // list.access.push(place);
               data.computers.access.push(place);
            } else if (category === "training-day") {
               data.training.day.push(place);
            } else if (category === "training-night") {
               data.training.night.push(place);
            } else if (category === "wifi-free") {
               data.wifi.free.push(place);
            } else if (category === "wifi-customer") {
              data.wifi.customer.push(place);
            } else if (category === "computers-retail") {
              data.computers.retail.push(place);
            } else if (category === "isp") {
              data.isps.push(place);
            };
          }

        
      }

$scope.thisBounds;

setTimeout(function(){
              // console.log("..");
              // console.log(svgW[0]);
              svgW.removeClass("vis-off");
              svgW.addClass("vis-on");
              $scope.loading = false;
                 var cMap = angular.element(document.getElementById("customMap"));

          cMap.removeClass("vis-off");
          cMap.addClass('vis-on')
}, 2000);


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


      function setButtonState(buttonType) {

      }


      function isStateActive(buttonType) {

      }
	    

	    function callback(data) {



	      var i;
	      var length = data.length;
	      resetToNormal();
	      for (i = 0; i < length; i++) {
	        var place = data[i];
          // console.log(place);
	        createMarker(place);
	      }
	    }

	    
      function getAll() {
        var all = [];
        var arr1 = $scope.markers.wifi.free;
        var arr2 = $scope.markers.wifi.customer;
        var arr3 = $scope.markers.training.day;
        var arr4 = $scope.markers.training.night;
        var arr5 = $scope.markers.computers.access;
        var arr6 = $scope.markers.computers.retail;
        all.push(arr1, arr2, arr3, arr4, arr5, arr6);
        return all.reduce(function(prev, curr) {
          return prev.concat(curr);
        });
      }

      function removeAllMapData() {
        var all = getAll();

        var l = all.length;
        var i;
        for (i=0;i<l;i++) {
          var l2 = all[i].length;
          var j;
          for (j=0;j<l2;j++) {
            // $scope.map.setMap()
            // console.log(all[i][j]);
            all[i][j].setMap(null);
          }
        }
      }

      $scope.zoomOut = function() {
        $scope.map.setZoom(13);
        setTimeout(function(){
            console.log("timeout");
            $scope.map.setZoom(12);
        }, 200);
      }

      $scope.zoomIn = function() {
        $scope.map.setZoom(14);
        setTimeout(function(){
            console.log("timeout");
            $scope.map.setZoom(15);
        }, 100);
      }



	    function recenterMap(latlng) {

        // removeAllMapData();
  			// $scope.map.setZoom(13);
        $scope.zoomIn();
  			$scope.map.setCenter(latlng);


	    }

      var mainPageEl = angular.element(document.getElementById("main-page"))[0];

      $scope.setPageHeightNormal = function() {
        mainPageEl.style.height = "638px";
      }


      function setPageHeightLong() {
        mainPageEl.style.height = "683px";
        document.getElementById('wrapper').style.height = "1024px";
        setTimeout(function(){
            console.log("timeout");
            $scope.map.setZoom(14);
        }, 500);
      }


      function validZipcode(zc) {
        // var pattern = {};
        console.log("validating zipcode");
        // var zi = parseInt(zc);
        console.log(zc);
        var pattern = new RegExp(/^\d{5}$/);
        if (zc.match(pattern)) {
          return true;
        } else {
          return false;
        }
      }



      var zse = document.getElementById('zipSearchError');
      $scope.zipSearchError = false;



      $scope.closeErrorWindow = function() {
        zse.style.display = "none";
        $scope.zipSearchError = false;
      }



	    $scope.searchByZip = function(zipcode) {
	      resetForm();
        $scope.zipSearchError = false;
	      // console.log(masterZips);
        var valid = validZipcode(zipcode);
        // console.log("valid?");
        // console.log(valid);

        if (valid) {
          var zc = zcPosition.getZcPosition(zipcode);
          var goTo = new google.maps.LatLng(zc[0], zc[1]);
          recenterMap(goTo);
          setPageHeightLong();
          var body = {zip: zipcode};
          $http.post('/api/places/query', body).success(function(data) {
            console.log('zip');
            console.log(data);
            callback(data);
          });
        } else {
          $scope.zipSearchError = true;
          zse.style.display = "block";
          $scope.zipSearchErrorMessage = "Error: Not a valid zipcode";
          return recenterMap($scope.currentLocation);
        }

	      // var ll = checkForZip(zipcode);
        

	    }

	    $scope.place = {
	      zip: ""
	    }

	    function resetForm() {
	      $scope.place.zip = '';
	    };


	    var callMethod = function() {
	       // console.log("search results");
	       // console.log($scope.searchResults);
	    };


	    var counter = 0;
	    function incrementToLimit(num) {
	      // console.log(num + " reaching limit =>" + limit);
	    }

	    

	  


	    function setWifiMarkers() {
	      // console.log("setWifiMarkers");
	      var frLocations = data.wifi.free;
	      var coLocations = data.wifi.customer;
	      var i;
	      var n;
	      var frLength = frLocations.length;
	      var coLength = coLocations.length;
	      for (i=0; i<frLength; i++) {
	        var place = frLocations[i];
	        // console.log(place);
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
	      var dayLocations = data.training.day;
	      var nightLocations = data.training.night;
	      // console.log(dayLocations);
	      // console.log(nightLocations);
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
	      var locations = data.computers.access;
	      var i;
	      var length = locations.length;
	      for (i=0;i<length;i++){
	        var place = locations[i];
	        createMarker(place);
	      }
	    }

	    function setRetailMarkers(){
	      var locations = data.computers.retail;
	      var i;
	      var length = locations.length;
	      for (i=0;i<length;i++){
	        var place = locations[i];
	        createMarker(place);
	      }
	    }



	    function getIcon(category) {
	      if (category === "computers-access") {
	       // return "modules/core/client/img/computerAccess.png";
         return "modules/core/client/img/computerAccess.png";
	      } else if (category === "training-day") {
	       return "modules/core/client/img/userOrange.png";
	      } else if (category === "training-night") {
	       return "modules/core/client/img/userBlue.png";
	      } else if (category === "wifi-free") {
          return "modules/core/client/img/wifi-free.svg";
	       // return "modules/core/client/img/wifiFree-2.png";
	      } else if (category === "wifi-customer") {
          return "modules/core/client/img/wifi-purchase.svg";
	       // return "modules/core/client/img/wifiCustomerOnly.png";
	      } else if (category === "computers-retail") {
	       return "modules/core/client/img/computerRetail.png";
	      } else if (category === "isp") {
	       return "modules/core/client/img/internetService.png";
	      };
	    }

	    function formatString(str) {
	    	var obj = str.replace(/ /g, "+");
	    	console.log(obj);
	    	return obj;
	    }

	 

	    $scope.steps = [];
	    var directions = [];

	    var stores = [];


var panel = angular.element(document.getElementById("directions-panel"));

var mapVeil = angular.element(document.getElementById("map-veil"));






		// function addBounce 
		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    // marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

		var markerIndex = {};

		function setActive(marker, latLng, category) {
	      $scope.map.setZoom(14);
	      setTimeout(function() {
	            console.log("timeout1");
	            $scope.map.setZoom(16);
	       }, 150);
	      setTimeout(function() {
	            console.log("timeout2");
	            $scope.map.setZoom(17);
	       }, 150);
	      setTimeout(function() {
	            console.log("timeout");
	            $scope.map.setZoom(18);
	       }, 150);



			var color = getColor(category);
			var spot = new google.maps.Marker({
								    position: latLng,
								    icon: {
								      path: google.maps.SymbolPath.CIRCLE,
								      scale: 13, 
								      anchor: new google.maps.Point(.4, 1.6),
								      strokeColor: color,
								      strokeWeight: 1.5
				  			       },
				          		    map: $scope.map
							 	   })
			$scope.activeSpot = spot;
			console.log("spot");
			console.log(spot);


		}

		function removeMarker(marker) {
			marker.setMap(null);
		}

		function setInactiveListener(marker) {

		}

		function findActive() {
			if ($scope.activeSpot == null) {
				
			} else {
				$scope.activeSpot.setMap(null);
			}
			
		}

		function markAsBouncing(marker) {
			$scope.bouncingMarker = marker;
		}

		function removeBouncing() {
			if ($scope.bouncingMarker == null) {

			} else {
				$scope.bouncingMarker.setAnimation(null);
			}
			
		}


		function sortByProximity(position) {
			var currentPos = position;
			// console.log("sortByProximity");
			// console.log(currentPos);
		}



		function recenterToMarker() {

			var center = $scope.bouncingMarker.getPosition();
			 $scope.map.setZoom(17);
			    $scope.map.setCenter(center);

			// marker.addListener('click', function() {
			   
			// })
		}






		function getColor(str) {
			if (str === "wifi-free") {
	    		return "green";
	    	} else if (str === "wifi-customer") {
	    		return "#000000";
	    	} else if (str === "computers-access") {
 				return "#000000";
	    	} else if (str === "computers-retail") {
	    		return "#000000"
	    	} else if (str === "training-day") {
	    		return "#b37503";
	    	} else if (str === "training-night") {
	    		return "blue";
	    	} else if (str === "isp") {
	    		return "firebrick";
	    	}
		}

		function togglePulse(marker) {
			console.log("toggle pulse");

			 var contentString = '<div id="content">'+ 'hi</div>';

	        var infowindow = new google.maps.InfoWindow({
	          content: contentString,
	          maxWidth: 200
	        });

	
	        infowindow.open($scope.map, marker);

	        google.maps.event.addListener(marker, 'mouseout', function() {
			    infowindow.close();
			});
 

	    }


		function addHoverListener(json, marker) {
			// marker.addListener('mousover', togglePulse);

			google.maps.event.addListener(marker, 'mouseover', function() {
					togglePulse(marker);
			})


		}



    $scope.mobileWindowOpen = false;
    var innerWidth = $window.innerWidth;
    var winWrapper = angular.element(document.getElementById("pseudoWrapWindow"));
    // console.log("CHECK FOR MOBILE WIDTH");
    // console.log(innerWidth);


    $scope.closeMobileWindow = function() {
      html.style.overflowY = 'visible';
      headerToggleId.style.display = "initial";
      mobileWindowElement.style.display = "none";
    }


    function getCurrentWidth() {
      // console.log("getCurrentWidth");
      // console.log($window.innerWidth);
      return $window.innerWidth;
    }


    $scope.sms = { to: ''};
    $scope.smsFormError = false;

    function validateSmsInput(input) {
    	return true;
    }

    $scope.smsResponse = false;

    function handleSmsResponse(res) {
    	console.log(res);
    	if (res === 'Sent') {
    		$scope.smsResponse = true;
    		$scope.sms.to = '';
    		$scope.sms.responseStatus = res;
    		document.getElementById('share-window').style.display="none";
    	}
    }

    function postSms(body) {
    	$http.post('/sms', body).success(function(res) {
            console.log('sms');
            console.log(res);
            handleSmsResponse(res.message);
         });
    }






















    $scope.setSmsSettings = function(phoneNumber) {
    	console.log("setSmsTarget()");
    	console.log(phoneNumber);

    	var title = document.getElementById('title-mob');
    	console.log(title.innerText);
    	var text = title.innerText;

    	var valid = validateSmsInput(phoneNumber);
    	if (valid) {
    		var body = {to: phoneNumber, content: text};

    		postSms(body);
    	}
    	// this.sms.to = phoneNumber;
    }
    // $scope.sms.to;

    $scope.openSmsForm = function() {
    	console.log("openSmsForm()");
    	$scope.smsFormOpen = true;
    }

    var cm = document.getElementById('customMap');
    var clone = cm.cloneNode(true);
    var cyClone = cm.cloneNode(true);

    $scope.closeSmsForm = function() {
    	console.log("closeSmsForm()");
    	$scope.smsFormOpen = false;
    }

    function setPlaceData(json) {

      // var addrStr = json.address1 + ", " + json.city

            $scope.undefined = {};
            // $scope.missing 
             // document.getElementById('placeCategory').innerText = categoryIconText(json.primaryCategory);             
             document.getElementById('placeAddress').innerText = json.address1;
             document.getElementById('placeCity').innerText = json.city;
             document.getElementById('placeState').innerText = json.state;
             
      if (typeof json.primaryCategory != 'undefined') {
        document.getElementById('placeCategory').innerText = categoryIconText(json.primaryCategory);
      }
      if (typeof json.title != 'undefined') {
        document.getElementById('placeTitle').innerText = json.title;
      }
      if (typeof json.zip != "undefined") {
        document.getElementById('placeZip').innerText = json.zip;           
      }
      if (typeof json.hours != "undefined") {
        document.getElementById('placeHours').innerText = json.hours;
      }
      if (typeof json.description != "undefined") {
        document.getElementById('placeDescription').innerText = json.description;
      }
      if (typeof json.phone != "undefined") {
        document.getElementById('placePhone').innerText = json.phone;              
      } 


     var addrStr = json.readableAddress;

     var base = "https://www.google.com/maps/dir//";
     var current;
     var destination = addressToUrlString(addrStr);
     var coords = "/@" + json.location[0].lat + "+" + json.location[0].lng + "/";
     var url = base + destination + coords;
     // console.log(url);
     var anchorTag = document.getElementById('map-directions');
     var mobAnchorTag = document.getElementById('mob-map-directions');
     anchorTag.href=url;
     mobAnchorTag.href = url;
     // console.log(anchorTag);
      // /4928+Main+Street,+Kansas+City,+MO+64112/@39.0374,-94.5875,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87c0efbc1225668b:0x1bbd092f4ee9f253!2m2!1d-94.5874594!2d39.0373724

            // el.primaryCategory.innerText = categoryIconText(json.primaryCategory);
            // el.title.innerText = json.title;
    }

    function addressToUrlString(str) {
      // console.log("addressToUrlString");
      // console.log(str);
      return str.replace(/\s/g, '+');
      // console.log(string);
    }






      function showPm(position) {
			console.log("showPm");
			console.log(position);
			// var latLng = [position[0], position[1]];

	      	var pmOptions = {
	        	center: {lat: parseFloat(position[0]), lng: parseFloat(position[1])},
	        	zoom: 18,
	        	disableDefaultUI: true,
	        	mapTypeId: google.maps.MapTypeId.ROADMAP
	      	};

	      	$scope.printableMap = new google.maps.Map(document.getElementById('printableMap'), pmOptions);

	      	var marker = new google.maps.Marker({
		        position: new google.maps.LatLng(position[0], position[1]),
		        map: $scope.printableMap
		    });

		    console.log(marker);

	      	console.log($scope.printableMap);

		}






    $scope.pmArray = [];

    function buildKeyValue(json) {
    	var latLng = [json.location[0].lat, json.location[0].lng];
    	return {id: json._id, position: latLng};
    }

    function setPrintWindow(json) {
    	// console.log(json);
    	// var kv = buildKeyValue(json);
    	// $scope.pmArray.push(kv);
    	var latLng = [json.location[0].lat, json.location[0].lng];
    	showPm(latLng);
    	// console.log(latLng);
    	// console.log(latLng.lat);
    	// $scope.pmLatLng = [latLng.lat, latLng.lng];
    	// $scope.pmPosition = json.
	    document.getElementById('address-print').innerText = json.address1;
	    document.getElementById('city-print').innerText = json.city;
	    document.getElementById('state-print').innerText = json.state;
	         
	    if (typeof json.primaryCategory != 'undefined') {
	      document.getElementById('primaryCategory-print').innerText = categoryIconText(json.primaryCategory);
	    }
	    if (typeof json.title != 'undefined') {
	      document.getElementById('title-print').innerText = json.title;
	    }
	    if (typeof json.zip != "undefined") {
	      document.getElementById('zip-print').innerText = json.zip;           
	    }
	    if (typeof json.hours != "undefined") {
	      document.getElementById('hours-print').innerText = json.hours;
	    }
	    if (typeof json.description != "undefined") {
	      document.getElementById('description-print').innerText = json.description;
	    }
	    if (typeof json.phone != "undefined") {
	      document.getElementById('phone-print').innerText = json.phone;              
	    }
	  }

	  // <a href="tel:+16085551212">Phone me!</a>

	  function regexCleanNumber(num) {
	  	return num.replace(/[^0-9]+/g, '');
	  }

	  function formatClickable(phoneNumber) {
	  	console.log("formatClickable");
	  	var a = "tel:+1";
	  	console.log("before");
	  	console.log(phoneNumber);


	  	var b = regexCleanNumber(phoneNumber);
	  	// var c = 

	  	console.log("after");
	  	console.log(b);
	  	console.log("result");
	  	console.log(a + b);
	  	return (a + b);
	  }

      function setMobileInfoWindowData(json) {
        document.getElementById('address-mob').innerText = json.address1;
        document.getElementById('city-mob').innerText = json.city;
        document.getElementById('state-mob').innerText = json.state;
        var hrsMob = document.getElementById('hours-mobily');
        var html = document.getElementById('html');
        console.log("setMobileInfoWindowData");
        console.log(hrsMob);
        console.log(json);
        // hrsMob.innerText=json.hours;
             
        if (typeof json.primaryCategory != 'undefined') {
          document.getElementById('primaryCategory-mob').innerText = categoryIconText(json.primaryCategory);
        }
        if (typeof json.title != 'undefined') {
          document.getElementById('title-mob').innerText = json.title;
        }
        if (typeof json.zip != "undefined") {
          document.getElementById('zip-mob').innerText = json.zip;           
        }
        if (typeof json.hoursOpen != "undefined") {
          
          hrsMob.innerText = json.hoursOpen;
          console.log("hours-mob");
          console.log(hrsMob);
        }
        if (typeof json.description != "undefined") {
          document.getElementById('description-mob').innerText = json.description;
        }
        if (typeof json.phone != "undefined") {
        	var hrefNum = formatClickable(json.phone);
        	console.log("hrefNum");
        	console.log(hrefNum);
        	document.getElementById('phone-mob').href = hrefNum;
            document.getElementById('phone-mob').innerText = json.phone;              
        }
      }

      function moveUp(el, em) {
      	console.log("moveUp");
      	console.log(el);
      	console.log(em);
      	var n = "-" + em + "em";
      	el.style.top = n;
      }

      function stretchMap() {
      	console.log("ngCm");
      	console.log(ngCm);
      	console.log("cm");
      	console.log(cm);
      	// var orig = ng.
    


      	cm.style.top = "-28em";



      	// ngCm.addClass("neg24");
      	// cm.addClass("neg24");
      	// cm.style.top = "-24em";
      	// cm.style.height = "1200px";
      }
      $scope.resetCustomMap = function() {
      	cm.style.top = "-4.6em";
      }

      var mobilePhoneTag = document.getElementById('phone-mob');
      var setToClickable = function() {

      }

	   function addListener(json, marker) {

        // console.log("adding listener");
        //   console.log(browser);

          var userDevice = browser;

           // var el = {};
           //    el.primaryCategory = document.getElementById('placeCategory');
           //    el.title = document.getElementById('placeTitle');
           //    el.phone = document.getElementById('placePhone');
           //    el.address = document.getElementById('placeAddress');

           //  el.primaryCategory.innerText = categoryIconText(json.primaryCategory);
           //  el.title.innerText = json.title;


	      google.maps.event.addListener(marker, 'click', function() {
       		setPlaceData(json);
       		setPrintWindow(json);
          setMobileInfoWindowData(json);


          console.log(userDevice);
          if (browser === "Mozilla") {
            console.log("true");
            console.log(browser);
          } else {
            console.log("not true");
            console.log(browser);
          }

          var c = getCurrentWidth();
          console.log(c);

          if (c <= 768) {
            console.log("c <= 768");
            stretchMap();

          } else {
            console.log("c > 768");
          }

	        resizeMap();	
	        findActive();
	
	        var lat = json.location[0].lat;
	        var lng = json.location[0].lng;
	        var ll = new google.maps.LatLng(lat,lng);
	        var cat = json.primaryCategory;
	        setActive(marker, ll, cat);



	        if (marker.getAnimation() !== null) {
    				marker.setAnimation(null);
    			} else {
    				removeBouncing();
    				// marker.setAnimation(google.maps.Animation.BOUNCE);
    				markAsBouncing(marker);
    				recenterToMarker();
    			}



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

	        var catDom = document.getElementById('placeCategory');
	        var ico = getIcon(json.primaryCategory);

	        $scope.currentCategory = ico;


          $scope.selected = {};
          $scope.selected.hoursOpen = json.hoursOpen;
          $scope.selected.zip = json.zip;
          $scope.selected.title = json.title;
          // $scope.selected.



	        document.getElementById('placeCategory').textContent = categoryIconText(json.primaryCategory);
	        document.getElementById('placeTitle').textContent = json.title;
	        descriptor.textContent = desc;
	        document.getElementById('placePhone').textContent = json.phone;
	        $scope.addr = document.getElementById('placeAddress').textContent = json.address1;
	        $scope.city = document.getElementById('placeCity').textContent = json.city;
	        $scope.state = document.getElementById('placeState').textContent = json.state;
	        $scope.zip = document.getElementById('placeZip').textContent = json.zip;
	        document.getElementById('placeHours').textContent = json.hoursOpen;
          
	      });
	    }


































      $scope.thisPlace = {};


	    function categoryIconText(str) {
	    	if (str === "wifi-free") {
	    		return "Free Public WiFi ";
	    	} else if (str === "wifi-customer") {
	    		return "Free WiFi with purchase ";
	    	} else if (str === "computers-access") {
 				return "Public Access Computers ";
	    	} else if (str === "computers-retail") {
	    		return "Low Cost or Refurbished Computers "
	    	} else if (str === "training-day") {
	    		return "Offers Daytime Training ";
	    	} else if (str === "training-night") {
	    		return "Offers Evening Training ";
	    	} else if (str === "isp") {
	    		return "Internet Service Provider ";
	    	}
	    }


	    function createMarker(json) {
	    	// console.log("createMarker");
	     //  console.log(json);

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
	      // addHoverListener(json, marker);

	      $scope.mapMarkers.push(marker);

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
	         
	      };
	    };

	    function clearWifiMarkers() {
	      console.log("clearWifiMarkers");
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
	      console.log("clearAccessMarkers");
	      var markers = $scope.markers.computers.access;
	      var i;
	      var length = $scope.markers.length;
	      for (i=0; i<length; i++) {
	        markers[i].setMap(null);
	      }
	      markers = [];
	    }

	    function clearRetailMarkers() {
	      var markers = $scope.markers.computers.retail;
	      var i; 
	      var length = $scope.markers.length;
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

	    $scope.trainingVisibility =false;
	    $scope.toggleTrainingMarkers = function() {
	      if ($scope.trainingVisibility) {
	        resetCss(e2, true);
	        setTrainingMarkers();
	        $scope.trainingVisibility = false;
	      } else {
	        resetCss(e2, false);
	        clearTrainingMarkers();
	        $scope.trainingVisibility = true;
	      }
	    }

	    $scope.computersVisibility = false;
	    $scope.toggleComputersMarkers = function() {
	      if ($scope.computersVisibility) {
	        resetCss(e3, true);
	        setAccessMarkers();
	        $scope.computersVisibility = false;
	      } else {
	        resetCss(e3, false);
	        clearAccessMarkers();
	        $scope.computersVisibility = true;
	      }
	    }

	    $scope.wifiVisibility = false;
	    $scope.toggleWifiMarkers = function() {
	      if ($scope.wifiVisibility) {
	        resetCss(e1, true);
	        $scope.buttonToggled = true;
	        setWifiMarkers();
	        $scope.wifiVisibility = false;
	      } else {
	        resetCss(e1, false);
	        clearWifiMarkers();
	        $scope.wifiVisibility = true;
	      }
	    }

	    $scope.refurbsVisibility = false;
	    $scope.toggleRefurbsMarkers = function() {
	      if ($scope.refurbsVisibility) {
	        resetCss(e4, true);
	        setRetailMarkers();
	        $scope.refurbsVisibility = false;
	      } else {
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

	    $scope.geolocationError = function (err) {
       
	      console.warn('ERROR(' + err.code + '): ' + err.message);
	    }

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
        if (innerWidth < 768) {
            $scope.mobileWindowOpen = false;
        }

	    }
      var html = document.getElementsByTagName('html')[0];
     

      function hideOverflow(element) {
        element.style.overflowY = "hidden";
      }

	    var resizeMap = function() {
        var cWidth = getCurrentWidth();
        console.log("resize map");
        console.log(cWidth);
        if (cWidth <= 768) {
          $scope.mobileMod = true;
          headerToggleId.style.display = "none";
          mobileWindowElement.style.display = "initial";
          $window.scrollTo(0,0);
          hideOverflow(html);
          var diff = (cWidth - 38);



          var x = diff + "px";
          document.getElementById('trix').style.width = x;
        } else {
          mapCanvasElement.style.width = "80%";
          mapCanvasElement.style.borderRight = "1px solid #4e4e4e";
          sideWindowElement.style.display = "initial";
        }
	      
        
	    }



      function onGeolocationError() {
        console.log("onGeolocationError");
        
        getGoogleGeolocation();
        // console.log("planB");
        // console.log($scope.planB);
        
      }

      function successCallback(res) {
      	console.log("successCallback");
      	console.log(res.data.location);
      	var loc = res.data.location;
      	console.log('loc');
      	console.log(loc);
      	var position = { 
                          coords: { latitude: loc.lat, longitude: loc.lng }
                        };
        console.log("position");
        console.log(position);
        $scope.showMap(position);
      }

      function errorCallback(res) {
      	console.log("errorCallback");
      	console.log(res);
      	console.log(libertyMemorial);
      	// var position = { 
       //                    coords: { latitude: libertyMemorial[0], longitude: libertyMemorial[1] }
       //                  };
       //  $scope.showMap(position);
      }
      
      function getGoogleGeolocation() {
      	var base = "https://www.googleapis.com/geolocation/v1/geolocate?key=";
      	var apiKey = "AIzaSyCC-reO4jDrH1PqVkRX7qp5t4PQMWoBmls";
      	var url = base + apiKey;
      	// YOUR_API_KEY
      	var body = {considerIp: true};
	    // $http.post(url, body).success(function(data) {
	  		// backupGeolocationCallback(data);
	    // });
	    $http.post(url, body).then(successCallback, errorCallback);

      }

      function backupGeolocationCallback(res) {
      	console.log("backupGeolocationCallback");
      	console.log(res.location);
      	$scope.planB = res.location;
      	var position = { 
                          coords: { latitude: libertyMemorial[0], longitude: libertyMemorial[1] }
                        };
        $scope.showMap(position);
      }



	    $scope.showError = function (error) {
        onGeolocationError();
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

	   var getLocation = function () {
	      if (navigator.geolocation) {
          // console.log("geolocation supported");
	        navigator.geolocation.getCurrentPosition($scope.showMap, $scope.showError);
	      }
	      else {
          // console.log("browser does not support geolocation")
	        $scope.error = "Geolocation is not supported by this browser.";
	      }
	    }

	    $scope.isLoaded = false;


	      $scope.removeWindow = function() { 
	      	// console.log("?");
	        removeWindow();
	      }


	    var loadMarkersOnInit = function (boolean) {
	    	// console.log("loadMarkersOnInit");
	    	if (boolean) {
	    		// console.log("init true");
	    		new google.maps.Marker({
		          position: $scope.initialLocation,
		          animation: google.maps.Animation.DROP,
		          map: $scope.map,
		          icon: 'modules/core/client/img/red-dot.png'
		      	});
	    	} else {
	    		// console.log("init false");
	    	}
	    	
	    }

	    var initFreeWifiButton = function () {
	    	// console.log("initFreeWifiButton");
	    	e1.removeClass('button normal fit small') && e1.addClass('button special fit small');

	    }

	    var inactiveCss = new RegExp('button normal fit small');
        var activeCss = new RegExp('button special fit small');



      $scope.currentlyHighlightedButtons = [];


      var callbackStatus = function(button, boolean) {
      	if (boolean) {
      		$scope.currentlyHighlightedButtons.push(button);
      	} 
      }



	    var getBtnStatus = function(btn) {

	    	var css = btn.className;
	    	var id = btn.id;

	    	// console.log(btn.id);
	    	if (css.match(activeCss)) {
	    		// console.log("css matches, is highlighted")
	    		return true;
	    	} else {
	    		// console.log("css not a match, not highlighted");
	    		return false;
	    	}
	    	// if (btn === )
	    }



      function zoomEnter() {
        setTimeout(function(){
            // console.log("timeout");
            $scope.map.setZoom(14);
        }, 200);
        setTimeout(function(){
            // console.log("timeout");
            $scope.map.setZoom(15);
        }, 400);
        setTimeout(function(){
            // console.log("timeout");
            $scope.map.setZoom(16);
        }, 800);
      }

      function fadeOutElement(element) {
        // console.log("fadeOut");
        // console.log(element)

        element.addClass("am-fade-and-slide-bottom-remove")
      }
      

	    $scope.showMap = function(position) {
        // console.log("showMap");
        // console.log(position);
	      $scope.lat = position.coords.latitude;
	      $scope.lng = position.coords.longitude;

	      $scope.accuracy = position.coords.accuracy;

	      $scope.mapOptions = {
	        center: {lat: $scope.lat, lng: $scope.lng},
	        zoom: 14,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          },
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      };


    

	      $scope.map = new google.maps.Map(document.getElementById('customMap'), $scope.mapOptions);

	      $scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push($scope.input);



        $scope.initialLocation = new google.maps.LatLng($scope.lat, $scope.lng);

	      $scope.currentLocation = $scope.initialLocation;


	      google.maps.event.addListenerOnce($scope.map, 'tilesloaded', function(){
			    // do something only the first time the map is loaded
          $scope.showMapControls = true
          zoomEnter()
			    // console.log("============================tilesloaded")
			    $timeout(6000, loadMarkersOnInit(true), true)
			    initFreeWifiButton()
			    setWifiMarkers()






				
		  });


          google.maps.event.addListenerOnce($scope.map, 'idle', function(){


				
		  });



          google.maps.event.addListener(net, 'mouseover', function() {
          	// console.log("mouse in net");
          	// console.log(viewIndex);
          })

          google.maps.event.addListenerOnce($scope.map, 'mouseover', function() {
          	// console.log("mousover map");
          	// console.log(currentIndex);
          	// console.log(viewIndex);

          	// reportViewIndex(currentIndex, viewIndex);
          	// measureDistances($scope.inViewNow);
          })


          $scope.mapReady = true;

	      $scope.clearAll = function() {
	      	clearAll();
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
	        var bounds = $scope.map.getBounds();
	      });
	        
	      // $scope.$apply();
	    };

   getLocation();
  }



	
}());
