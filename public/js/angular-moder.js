'use strict';

console.log('Application Angular module is required!');

var doc = document,
    moderApp,

moderApp = angular.module('moderApp', ['ngRoute', 'ngAnimate']);

moderApp.config(['$routeProvider', '$locationProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/moder/home.php',
      controller: 'moderCtrl'
    })
    .when('/blog', {
      templateUrl: 'views/moder/blog.php',
      controller: 'moderCtrl'
    })
    .when('/ministry', {
      templateUrl: 'views/moder/ministry.php',
      controller: 'moderCtrl'
    })
    .when('/about-us', {
      templateUrl: 'views/moder/about-us.php',
      controller: 'moderCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/moder/contact.php',
      controller: 'moderCtrl'
    })
    .when('/player', {
      templateUrl: 'views/moder/player.php',
      controller: 'moderCtrl'
    })
}]);

moderApp.controller('moderCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
  $scope.$on('$viewContentLoaded', function() {
    ngViewReady();
  });
}]);