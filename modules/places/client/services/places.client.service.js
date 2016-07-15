(function () {
  'use strict';

  angular
    .module('places.services')
    .factory('PlacesService', PlacesService)
    // .factory('ListPlacesService', ListPlacesService)

  PlacesService.$inject = ['$resource', '$http'];

  // ListPlacesService.$inject = ['$http'];

  function PlacesService($resource) {
    return $resource('api/places/:placeId', {
      placeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }

  // function ListPlacesService($http) {
  //   var fn = function(data) {
  //     return data;
  //   }
  //   var listPlaces = $http.get('/api/places').success(function(data) {
  //     fn(data);
  //   })
  //   return {
  //     listPlaces: listPlaces
  //   };
  // }
}());

var fn = function(data) {
  console.log("fn");
  return data;
}

angular.module('places.services').factory('ListPlacesService', ['$http',
  // function ListPlaces($http) {
  //   $http.get('/api/places').success(function(data) {
  //     fn(data);
  //   })
  //   return {
  //     listPlaces: listPlaces
  //   };
  // }
 
  function listPlaces($http) {
    var listPlaces = function(fn) {
      $http.get('/api/places').success(function(data) {
        var mm = fn(data);
        console.log(mm);
      });
    }

      // $http.get('/api/places').success(function(data) {
      //   var mm = fn(data);
      //   console.log(mm);
      // });
    return {
      listPlaces: listPlaces
    } 
  }
]);





angular.module('places.services').factory('Places', ['$resource',
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


angular.module('places.services').factory('getPlacesService', function($http) {
  var getPlaces = function(callback) {
    $http.get('/api/places').success(function(data) {
      callback(data);
    });
  };

  return {
    getPlaces: getPlaces
  };
});

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