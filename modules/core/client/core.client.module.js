(function (app) {
  'use strict';

  app.registerModule('core');
  app.registerModule('core.map');
  app.registerModule('core.tabs');
  app.registerModule('core.modal');
  app.registerModule('core.timepicker');
  app.registerModule('core.services');
  app.registerModule('core.routes', ['ui.router', 'places.services']);
  app.registerModule('core.admin', ['core']);
  app.registerModule('core.admin.routes', ['ui.router']);
}(ApplicationConfiguration));
