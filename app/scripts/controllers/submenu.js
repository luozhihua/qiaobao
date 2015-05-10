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

    $scope.menus = [
      {
        id: 'xiangcai',
        name: '湘菜'
      }, {
        id: 'yucai',
        name: '豫菜'
      }, {
        id: 'chuancai',
        name: '川菜'
      }, {
        id: 'yuecai',
        name: '粤菜'
      }, {
        id: 'liangcai',
        name: '凉菜'
      }, {
        id: 'jiushui',
        name: '酒水'
      }, {
        id: 'yinliang',
        name: '饮料'
      }
    ];

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
