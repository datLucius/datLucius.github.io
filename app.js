(function() {
  'use strict';
    angular
    .module('portfolio', [
      'ngRoute',
      'smoothScroll'
    ])
    .config(function ($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'name.html',
        controller: 'MainController'
      })
      .when('/contents', {
        templateUrl: 'contents.html',
        controller: 'MainController'
      })
      .when('/resume', {
        templateUrl: 'resume.html',
        controller: 'MainController'
      })
      .when('/yes', {
        templateUrl: 'yes.html',
        controller: 'MainController'
      })
      .when('/imK', {
        templateUrl: 'imK.html',
        controller: 'MainController'
      })
      .when('/art', {
        templateUrl: 'art.html',
        controller: 'MainController'
      })
      .when('/404', {
        templateUrl: 'views/biz.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTp: '/404'
      })
    });
}());
