(function () {
  'use strict';

  angular
    .module('places.services')
    .factory('PlacesService', PlacesService);

  PlacesService.$inject = ['$resource'];

  function PlacesService($resource) {
    return $resource('api/places/:placeId', {
      placeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());

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