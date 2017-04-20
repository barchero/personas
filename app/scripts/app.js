'use strict';

/**
 * @ngdoc overview
 * @name cabsaApp
 * @description
 * # cabsaApp
 *
 * Main module of the application.
 */
angular
  .module('cabsaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detalle/:id', {
        templateUrl: 'views/vistadetallepersona.html',
        controller: 'detallePersonaCtrl',
        controllerAs: 'detallePersona'
      })
      .when('/nuevaPersona', {
        templateUrl: 'views/nuevapersona.html',
        controller: 'NuevapersonaCtrl',
        controllerAs: 'nuevaPersona'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
