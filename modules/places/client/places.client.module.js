(function (app) {
  'use strict';

  app.registerModule('places', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('places.services');
  app.registerModule('places.routes', ['ui.router', 'core.routes', 'places.services']);
}(ApplicationConfiguration));