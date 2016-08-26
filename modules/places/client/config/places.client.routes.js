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
        templateUrl: 'modules/places/client/views/list-places.client.view.html',
        controller: 'PlacesListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Places List'
        }
      })
      .state('places.create', {
        url: '/create',
        templateUrl: 'modules/places/client/views/create-place.client.view.html',
        controller: 'PlacesController',
        controllerAs: 'vm',
        resolve: {
          placeResolve: newPlace
        },
        data: {
          roles: ['user', 'admin', 'guest'],
          pageTitle: 'Places Create'
        }
      })
      .state('places.edit', {
        url: '/:placeId/edit',
        templateUrl: 'modules/places/client/views/form-place.client.view.html',
        controller: 'PlacesController',
        controllerAs: 'vm',
        resolve: {
          placeResolve: getPlace
        },
        data: {
          roles: ['user', 'admin', 'guest'],
          pageTitle: 'Edit Place {{ placeResolve.title }}'
        }
      })
      .state('places.view', {
        url: '/:placeId',
        templateUrl: 'modules/places/client/views/view-place.client.view.html', 
        controller: 'PlacesController',
        controllerAs: 'vm',
        resolve: {
          placeResolve: getPlace
        },
        data: {
          pageTitle: 'Place {{ placeResolve.title }}'
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