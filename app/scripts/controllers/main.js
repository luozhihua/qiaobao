'use strict';

/**
 * @ngdoc function
 * @name qiaobaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiaobaoApp
 */
angular.module('qiaobaoApp')
  .controller('MainCtrl', ['$scope', 'qiaobaoService', function ($scope, svc) {

    // 加载菜单类别
    svc.loadCatgories().success(function(res) {
      if (res.success) {
        $scope.menus = res.data;

        $scope.queryFoods(res.data[0].menu_id);

      }
    });

    function queryFoodsAction () {

      if ($scope.foods) {
        $scope.foods.length = 0;
      } else {
        $scope.foods = [];
      }

      svc.queryFoods($scope.queryModel)
      .success(function(res){
        if (res.success) {
          var random = res.data.sort(function(){
            return 0.5 - Math.random();
          });

          angular.forEach(random, function (food) {
            $scope.foods.push(food);
          })
        }
      });
    }


    angular.extend($scope, {

      /**
       * 请求模型
       *
       */
      queryModel : {
        'order_field'  : CONFIG.orderField,
        'order_type'   : CONFIG.orderType,
        'menu_type_id' : null
      },

      /**
       * 根据类别ID加载菜品
       * @param menuId
       */
      'queryFoods': function(menuId) {

        $.extend($scope.queryModel, {
          'menu_id': menuId
        });

        queryFoodsAction();
      },

      /**
       * 切换排序规则
       * @param sortFeild
       * @param sortTypeId
       */
      sortFoods: function(sortFeild, sortTypeId) {

        $.extend($scope.queryModel, {
          'order_field': sortFeild,
          'order_type_id': sortTypeId
        });

        queryFoodsAction();
      },

      /**
       * 隐藏侧滑菜单
       * @return {[type]} [description]
       */
      hideSidebar: function () {
        $("#toggle-sidebar").sideNav('hide');
      }
    });

  }]);
