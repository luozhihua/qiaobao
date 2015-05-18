"use strict";angular.module("qiaobaoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/menu/:menuId",{templateUrl:"views/food.html",controller:"MenusCtrl"}).when("/menu/:menuId/sort/:orderBy/:orderByType",{templateUrl:"views/food.html",controller:"MenusCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope",function(a){a.orderByList=CONFIG.orderByList,$(".toggle-sidebar").sideNav()}]),angular.module("qiaobaoApp").factory("qiaobaoService",["$http",function(a){var b={},c=CONFIG.apis.categoreis,d=CONFIG.apis.foods;return angular.extend(b,{FoodQueryModel:function(a){$.extend(this,{order_field:CONFIG.orderField,order_type:CONFIG.orderType,menu_type_id:null},a)},loadCategories:function(){return a.get(c)},queryFood:function(b){return a.get(d,b)}}),b}]),angular.module("qiaobaoApp").controller("MainCtrl",["$rootScope","$scope","$route","$location","$routeParams","qiaobaoService",function(a,b,c,d,e,f){f.loadCategories().success(function(b){var c="menu_id";b.success&&(a.menus=b.data,d.url("/menu/"+b.data[0][c]))}),angular.extend(a,{$params:e,hideSidebar:function(){$("#toggle-sidebar").sideNav("hide")}})}]),angular.module("qiaobaoApp").controller("MenusCtrl",["$rootScope","$scope","$route","$location","$routeParams","qiaobaoService",function(a,b,c,d,e,f){angular.extend(b,{init:function(){var a=new f.FoodQueryModel({menu_id:e.menuId,order_feild:e.orderBy,order_type:e.orderByType});this.queryFood(a)},queryFood:function(a){if(!a)throw new Error("Missing query model.");f.queryFood(a).success(function(a){a.success&&this.renderFood(a)}.bind(this))},renderFood:function(a){this.foods?this.foods.length=0:this.foods=[],a=a.data.sort(function(){return.5-Math.random()}),angular.forEach(a,function(a){this.foods.push(a)}.bind(this))},loadFoodByMenuId:function(a){if(a){var b=new f.FoodQueryModel({menu_id:a,order_feild:e.sortFeild||"",order_type:e.sortType||""});this.queryFood(b)}},sortFoods:function(a,b){b=b||"desc",d.url("/menu/"+e.menuId+"/sort/"+e.orderBy+"/"+e.orderByType)},turnCard:function(a,b){var c=$(a.currentTarget);c.parent().addClass("turn").siblings(".food-card").removeClass("turn")},showDetail:function(a,b){this.$root.activeFood=b,$("#foodDetailsModal").openModal()}}).init()}]),angular.module("qiaobaoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);