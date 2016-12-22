// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('clubApp', ['ionic',
                           'ngCordova',
                           'home.controller',
                           'descuentos.controller',
                           'premios.controller',
                           'descuentosDetail.controller',
                           'premiosDetail.controller',
                           'tabs.controller',
                           'cercanos.controller',
                           'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      setTimeout(function() {
        navigator.splashscreen.hide();
      }, 300);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  //Configuramos el tab
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
     controller: 'TabsCtrl'
  })

  /*
   Cada Tab tiene su ruta de estado

   */
    //Home
    .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
    //Cercanos
    .state('tab.cercanos', {
      url: '/cercanos',
      views: {
        'tab-cercanos': {
          templateUrl: 'templates/tab-cercanos.html',
          controller: 'CercanosCtrl'
        }
      }
    })
  //Descuentos
  .state('tab.descuentos', {
      url: '/descuentos',
      views: {
        'tab-descuentos': {
          templateUrl: 'templates/tab-descuentos.html',
          controller: 'DescuentosCtrl',
          params: {'descuentoId': null}
        }
      }
    })
    .state('descuentosDetail', {
      url: '/descuentosDetail',
      templateUrl: 'templates/descuentos-detail.html',
      controller: 'DescuentosDetailCtrl',
      params: {'descuentoId': null,'back':''}
    })

     //Premios
  .state('tab.premios', {
    url: '/premios',
    views: {
      'tab-premios': {
        templateUrl: 'templates/tab-premios.html',
        controller: 'PremiosCtrl'
      }
    }
  })
    .state('premiosDetail', {
      url: '/premiosDetail',
      templateUrl: 'templates/premios-detail.html',
      controller: 'PremiosDetailCtrl',
      params: {'premioId': null,'back':''}
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
