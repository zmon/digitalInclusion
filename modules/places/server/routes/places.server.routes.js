'use strict';

/**
 * Module dependencies.
 */
var placesPolicy = require('../policies/places.server.policy'),
  places = require('../controllers/places.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/places').all(placesPolicy.isAllowed)
    .get(places.list)
    .post(places.create);

  app.route('/api/places/directions')
    .post(places.locate);

  app.route('/api/places/matrix')
    .post(places.measure);

  app.route('/api/places/location')
    .post(places.match);

  app.route('/api/places/zip')
    .get(places.identify);

  app.route('/api/places/search')
    .post(places.search);

  app.route('/api/places/query')
    .post(places.find);
  // Single place routes
  app.route('/api/places/:placeId').all(placesPolicy.isAllowed)
    .get(places.read)
    .put(places.update)
    .delete(places.delete);

  // Finish by binding the place middleware
  app.param('query', places.placeByQuery);
  app.param('placeId', places.placeByID);
};
