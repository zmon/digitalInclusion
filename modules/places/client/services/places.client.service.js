(function () {
  'use strict';

  angular
    .module('places.services')
    .factory('PlacesService', PlacesService)
    // .factory('ListPlacesService', ListPlacesService)
    // .factory('getPlacesService', getPlacesService)

  PlacesService.$inject = ['$resource', '$http'];
  // ListPlacesService.$inject = ['$resource', '$http'];
  // getPlacesService.$inject = ['$resource', '$http'];

  // ListPlacesService.$inject = ['$http'];
  // console.log("places.client.service-1");
  function PlacesService($resource) {
    return $resource('api/places/:placeId', {
      placeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
  // console.log("places.client.service-2");
  // console.log(PlacesService);
  // console.log(angular.module('places.services'));

  // function fn(data) {
  //   console.log("fn");
  //   return { data: data };
  // }

  // var placeArray = [];

  // function callback(data) {
  //   console.log("callback");
  //   console.log(data);
  //   placeArray.push(data);
  //   return data;
  // }

  // function ListPlacesService($http) {
  //   console.log("places.client.service - 3");
  //   var listPlaces = function(callback) {
  //     $http.get('/api/places').success(function(data) {
  //         console.log("places.client.service - 4 (success)");
  //         return callback(data);
  //       })
  //   }

  //   console.log(listPlaces);

    // var x = { listPlaces: listPlaces };
    // console.log("x");
    // console.log(x);
    // console.log("placeArray");
    // console.log(placeArray);
    // return x;
  //   var fn = function(data) {
  //     return data;
  //   }




    

  //   .success(function(data) {
  //     console.log("places.client.server - 4");
  //     console.log("success");
  //     fn(data);
  //   }).error(function(){
  //     console.log("places.client.server - 4");
  //     console.log("error");
  //   });
   
  // }

  // function getPlacesService($http) {

  //   console.log("places.client.service - 5");

  //   function endCycle(data) {
  //     console.log("endCycle");
  //     console.log(data);
  //     placeArray.push(data);
  //     return data;
  //   }

  //   var getPlaces = function($http) {
  //     console.log("getPlaces");
  //     $http.get('/api/places').success(function(data) {
  //       console.log("places.client.service - 4 (success)");
  //       endCycle(data);
  //     }).error(function(){
  //       console.log("places.client.service - 4 (success)");
  //       console.log("error");
  //     });
  //   };
  //   var y = { getPlaces: getPlaces };
  //   return y;
  // }

}());



// angular.module('places.services').factory('getPlacesService', function($http) {
//   var getPlaces = function(callback) {
//     $http.get('/api/places').success(function(data) {
//       callback(data);
//     });
//   };

//   return { getPlaces: getPlaces };
// });


angular.module('places.services').factory('findPlacesByZipService', function($http) {
  var findPlacesByZip = function(zipcode, callback) {
    console.log('service');
    console.log(zipcode);
    body = {zip: zipcode};
    console.log(body);
    $http.post('/api/places/query', body).success(function(data) {
      callback(data);
    });
  };

  return {
    findPlacesByZip: findPlacesByZip
  };
});





// angular.module('places.services').factory('Places', ['$resource',
//   function ($resource) {
//     return $resource('api/places/:placeId', {
//       placeId: '@_id'
//     }, {
//       update: {
//         method: 'PUT'
//       }
//     });
//   }
// ]);