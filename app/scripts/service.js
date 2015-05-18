'use strict';

angular.module('qiaobaoApp')

.factory('qiaobaoService', ['$http', function($http) {

  var factory = {},
      categoriesURI = CONFIG.apis.categoreis,
      foodsURI = CONFIG.apis.foods;

  angular.extend(factory, {

    /**
     * 请求模型
     *
     */
    FoodQueryModel : function (params) {
      $.extend(this, {
        'order_field'  : CONFIG.orderField,
        'order_type'   : CONFIG.orderType,
        'menu_type_id' : null
      }, params);
    },

    loadCategories: function() {

      return $http.get(categoriesURI);
    },

    queryFood: function(params) {

      return $http.get(foodsURI, params);
    }

  });

  return factory;
}]);
