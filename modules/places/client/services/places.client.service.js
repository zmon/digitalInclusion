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
