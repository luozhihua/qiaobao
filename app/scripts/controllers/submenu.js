'use strict';

/**
 * @ngdoc function
 * @name qiaobaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiaobaoApp
 */
angular.module('qiaobaoApp')
  .controller('SubmenuCtrl', function ($scope) {

    $scope.orders = [
      {
        id: 'desc',
        name: '菜名降序排列'
      }, {
        id: 'asc',
        name: '菜名升序排列'
      }
    ];
  });
