'use strict';

/**
 * @ngdoc overview
 * @name qiaobaoApp
 * @description
 * # qiaobaoApp
 *
 * Main module of the application.
 */
angular
  .module('qiaobaoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMdIcons'
  ])

  .config(function($mdThemingProvider) {
    var neonRedMap = $mdThemingProvider.extendPalette('deep-orange', {
      //'500': '#FF590D'
    });

    $mdThemingProvider.definePalette('neonRed', neonRedMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('neonRed');
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
