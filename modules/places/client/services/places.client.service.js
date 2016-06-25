'use strict';

//Places service used for communicating with the places REST endpoints
angular.module('places').factory('Places', ['$resource',
  function ($resource) {
    return $resource('api/places/:placeId', {
      placeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

// angular.module('places').factory('getPlacesService', function($http) {
//   return {
//     getPlaces: (function(response) {
//       return $http.get('/api/places')
//       .then(function(response){
//         // console.log(response.data);
//         return response.data;
//       });
//     })()
//   };
//   return getPlacesService;
//  });


//   getPlaces = function(callback) {
//     $http.get('/api/places').success(function(data) {
//       console.log("service");
//       var cb = callback(data);
//       callback(cb);
//     });
//   };

//   return {getPlaces: getPlaces};
// });


// var myService = angular.module("xo").factory("myService", ['$http', function($http) {
//     return {
//         getResponders: (function(response) {

//             return $http.get('myUrl')
//             .then(function(response) {
//               console.log("coming from servicejs", response.data);
//               //return data when promise resolved
//               //that would help you to continue promise chain.
//               return response.data;
//             });
//         })()
//     };
//     return myService;
// }]);
angular.module('places').factory('getPlacesService', function($http) {
  var getPlaces = function(callback) {
    $http.get('/api/places').success(function(data) {
      callback(data);
    });
  };

  return {
    getPlaces: getPlaces
  };
});



// angular.module('digitalInclusion.places').factory('getAllPlaces', function($http) {
//   var allPlaces = function(callback) {
//     $http.get('/api/places').success(function(data) {
//       console.log("service");
//       console.log(data);
//       callback(data);
//     });
//   };

//   return {
//     allPlaces: allPlaces
//   };
// });


