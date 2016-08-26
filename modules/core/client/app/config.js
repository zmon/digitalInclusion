(function (window) {
  'use strict';

  var applicationModuleName = 'digitalInclusion';

  var service = {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: ['ngResource', 'ngAnimate', 'ngMessages', 'ngMaterial', 'material.svgAssetsCache', 'material.components.colors', 'material.components.swipe', 'ui.map', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tabs', 'ui.bootstrap.modal', 'ui.bootstrap.timepicker', 'angularFileUpload', 'selector', 'angular-progress-button-styles', 'angularSpinners'],
    registerModule: registerModule
  };

  window.ApplicationConfiguration = service;

  // Add a new vertical module
  function registerModule(moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  }
}(window));
