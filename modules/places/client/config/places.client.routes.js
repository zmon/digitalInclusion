(function () {
  'use strict';

  angular
    .module('places.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('places', {
        abstract: true,
        url: '/places',
        template: '<ui-view/>'
      })
      .state('places.list', {
        url: '',
        templateUrl: 'modules/places/client/views/list-places.client.view.html'
      })
      .state('places.create', {
        url: '/create',
        templateUrl: 'modules/places/client/views/create-place.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('places.view', {
        url: '/:placeId',
        templateUrl: 'modules/places/client/views/view-place.client.view.html'
      })
      .state('places.edit', {
        url: '/:placeId/edit',
        templateUrl: 'modules/places/client/views/edit-place.client.view.html',
        data: {
          roles: ['guest','user', 'admin']
        }
      });
  }

  getPlace.$inject = ['$stateParams', 'PlacesService'];

  function getPlace($stateParams, PlacesService) {
    return PlacesService.get({
      placeId: $stateParams.placeId
    }).$promise;
  }

  newPlace.$inject = ['PlacesService'];

  function newPlace(PlacesService) {
    return new PlacesService();
  }
}());