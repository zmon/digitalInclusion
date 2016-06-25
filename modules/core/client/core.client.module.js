(function (app) {
  'use strict';

  app.registerModule('core');
  app.registerModule('core.map');
  app.registerModule('core.tabs');
  app.registerModule('core.routes', ['ui.router']);
  app.registerModule('core.admin', ['core']);
  app.registerModule('core.admin.routes', ['ui.router']);
}(ApplicationConfiguration));
