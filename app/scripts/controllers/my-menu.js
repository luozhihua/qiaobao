'use strict';

/**
 * @ngdoc function
 * @name qiaobaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiaobaoApp
 */
angular.module('qiaobaoApp')
  .controller('MyMenuCtrl', [
           '$rootScope', '$scope', '$route', '$location', '$routeParams', 'qiaobaoService',
  function ($root,        $scope,   $route,   $location,   $params,        svc) {

    angular.extend($scope, {

      init: function() {
        svc.queryMymenu()
        .success(function(res) {
          if (res.success) {
            this.mymenu = res.data;
          }
        }.bind(this));
      }

    })
    .init();

  }]);
