var orca_web = angular.module('orca_web', [
  'ngRoute','homeControllers']);

orca_web.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/home.html'
      }).
      when('/jobs', {
        templateUrl: 'html/jobs.html'
      }).
      when('/features', {
        templateUrl: 'html/features.html'
      }).
      when('/support', {
        templateUrl: 'html/support.html'
      }).
      when('/blogs', {
        templateUrl: 'html/blogs.html'
      })
  }]);