(function () {
  'use strict';

  angular
    .module('places.services')
    .factory('PlacesService', PlacesService);

  PlacesService.$inject = ['$resource', '$http'];

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

angular.module('places.services').factory('findPlacesByZipService', function($http) {
  var findPlacesByZip = function(zipcode, callback) {
    var body = { zip: zipcode };

    $http.post('/api/places/query', body).success(function(data) {
      callback(data);
    });
  };

  return {
    findPlacesByZip: findPlacesByZip
  };
});
