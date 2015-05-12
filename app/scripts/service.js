'use strict';

angular.module('qiaobaoApp')

.factory('qiaobaoService', ['$http', function($http) {

  var factory = {},
      categoriesURI = QIAOBAO_APIS.categoreis,
      foodsURI = QIAOBAO_APIS.foods;

  angular.extend(factory, {

    loadCatgories: function() {

      return $http.get(categoriesURI);
    },

    queryFoods: function(params) {

      return $http.get(foodsURI, params);
    }

  });

  return factory;
}]);
