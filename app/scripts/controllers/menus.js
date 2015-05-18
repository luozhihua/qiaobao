'use strict';

/**
 * @ngdoc function
 * @name qiaobaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiaobaoApp
 */
angular.module('qiaobaoApp')
  .controller('MenusCtrl', [
           '$rootScope', '$scope', '$route', '$location', '$routeParams', 'qiaobaoService',
  function ($root,        $scope,   $route,   $location,   $params,        svc) {

    angular.extend($scope, {

      init: function() {
        var model = new svc.FoodQueryModel({
          'menu_id'     : $params.menuId,
          'order_feild' : $params.orderBy,
          'order_type'  : $params.orderByType
        });

        this.queryFood(model);
      },

      /**
       * 根据查询模型从服务器请求菜品列表
       * @param  {Object} model
       * @return {[type]}       [description]
       */
      queryFood: function (model) {

        if (!model) {
          throw new Error('Missing query model.');
        }

        svc.queryFood(model)
        .success(function(res) {
          if (res.success) {
            this.renderFood(res);
          }
        }.bind(this));
      },

      /**
       * 渲染菜品列表
       * @param  {Array} list 菜品列表
       */
      renderFood: function(list) {

        if (this.foods) {
          this.foods.length = 0;
        } else {
          this.foods = [];
        }

        list = list.data.sort(function(){
          return 0.5 - Math.random();
        });

        angular.forEach(list, function (food) {
          this.foods.push(food);
        }.bind(this));
      },

      /**
       * 根据类别ID加载菜品
       * @param menuId
       */
      'loadFoodByMenuId': function(menuId) {
        if (menuId) {
          var model = new svc.FoodQueryModel({
            'menu_id'     : menuId,
            'order_feild' : $params.sortFeild || '',
            'order_type'  : $params.sortType || ''
          });

          this.queryFood(model);
        }
      },

      /**
       * 切换排序规则
       * @param orderBy
       * @param orderByType
       */
      sortFoods: function(orderBy, orderByType) {

        orderByType = orderByType || 'desc';

        $location.url('/menu/'+ $params.menuId + '/sort/'+ $params.orderBy + '/'+ $params.orderByType);
      },

      turnCard: function($event, food) {

        var elem = $($event.currentTarget);

        elem.parent().addClass('turn')
        .siblings('.food-card').removeClass('turn');
      },

      showDetail: function ($event, food) {
        this.$root.activeFood = food;
        $('#foodDetailsModal').openModal();
      }
    })
    .init();

  }]);
