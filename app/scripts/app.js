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
    'ngTouch'
  ])

  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/menu/:menuId', {
        templateUrl: 'views/food.html',
        controller: 'MenusCtrl'
      })
      .when('/menu/:menuId/sort/:orderBy/:orderByType', {
        templateUrl: 'views/food.html',
        controller: 'MenusCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$rootScope', function($root) {
      $root.orderByList = CONFIG.orderByList;

      // 边栏
      $('.toggle-sidebar').sideNav();
  }]);
