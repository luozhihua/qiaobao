'use strict';

angular.module('qiaobaoApp')

.factory('qiaobaoService', ['$http', function($http) {

  var factory = {},
      categoriesURI = QIAOBAO_APIS.categoreis,
      foodsURI = QIAOBAO_APIS.foods;

  angular.extend(factory, {

    test: function() {
      alert(9);
    },

    loadCatgories: function() {

      return $http.get(categoriesURI);
    },

    queryFoods: function(params) {

      return $http.post(foodsURI, params);
    }

  });

  return factory;
}]);
