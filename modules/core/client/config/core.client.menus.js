(function () {
  'use strict';

  angular
    .module('core')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {

    menuService.addMenu('home', {
      roles: ['guest'],
    });

    menuService.addMenuItem('home', {
      title: 'Home',
      state: 'home',
      type: 'dropdown',
      roles: 'guest'
    });

    menuService.addSubMenuItem('home', 'add-locations', {
      title: 'Add Service',
      state: 'create'
    });

    menuService.addSubMenuItem('home', 'about', {
      title: 'About Us',
      state: 'about'
    });

    menuService.addSubMenuItem('home', 'contact', {
      title: 'Contact Us',
      state: 'contact'
    });







    // menuService.addMenu('account', {
    //   roles: ['user']
    // });

    // menuService.addMenuItem('account', {
    //   title: '',
    //   state: 'settings',
    //   type: 'dropdown',
    //   roles: ['user']
    // });

    // menuService.addSubMenuItem('account', 'settings', {
    //   title: 'Edit Profile',
    //   state: 'settings.profile'
    // });

    // menuService.addSubMenuItem('account', 'settings', {
    //   title: 'Edit Profile Picture',
    //   state: 'settings.picture'
    // });

    // menuService.addSubMenuItem('account', 'settings', {
    //   title: 'Change Password',
    //   state: 'settings.password'
    // });

    // menuService.addSubMenuItem('account', 'settings', {
    //   title: 'Manage Social Accounts',
    //   state: 'settings.accounts'
    // });
  }
}());
