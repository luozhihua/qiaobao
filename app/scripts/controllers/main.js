'use strict';

/**
 * @ngdoc function
 * @name qiaobaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qiaobaoApp
 */
angular.module('qiaobaoApp')
  .controller('MainCtrl', [
         '$rootScope', '$scope',  '$route', '$location', '$routeParams', 'qiaobaoService',
function ($root,        $scope,    $route,   $location,   $params,        svc) {

  // 加载菜单类别
  svc.loadCategories().success(function(res) {
    var menuIdField = 'menu_id';

    if (res.success) {
      $root.menus = res.data;
      
      $location.url('/menu/'+ res.data[0][menuIdField]);
    }
  });

  angular.extend($root, {

    $params: $params,

    /**
     * 隐藏侧滑菜单
     * @return {[type]} [description]
     */
    hideSidebar: function () {
      $('#toggle-sidebar').sideNav('hide');
    }
  });

}]);
