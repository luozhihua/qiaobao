"use strict";angular.module("qiaobaoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","ngMdIcons"]).config(["$mdThemingProvider",function(a){var b=a.extendPalette("deep-orange",{});a.definePalette("neonRed",b),a.theme("default").primaryPalette("neonRed")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("qiaobaoApp").controller("SubmenuCtrl",["$scope",function(a){a.menus=[{id:"xiangcai",name:"湘菜"},{id:"yucai",name:"豫菜"},{id:"chuancai",name:"川菜"},{id:"yuecai",name:"粤菜"},{id:"liangcai",name:"凉菜"},{id:"jiushui",name:"酒水"},{id:"yinliang",name:"饮料"}],a.orders=[{id:"desc",name:"菜名降序排列"},{id:"asc",name:"菜名升序排列"}]}]),angular.module("qiaobaoApp").controller("MainCtrl",function(){}),angular.module("qiaobaoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);