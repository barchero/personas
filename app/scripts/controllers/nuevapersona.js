'use strict';

/**
 * @ngdoc function
 * @name cabsaApp.controller:NuevapersonaCtrl
 * @description
 * # NuevapersonaCtrl
 * Controller of the cabsaApp
 */
angular.module('cabsaApp')
  .controller('NuevapersonaCtrl', function ($scope, $location, servicioPersonas) {
      $scope.persona = {};
      $scope.anadirPersona = function(validForm){
          if(validForm){
              servicioPersonas.anadirPersona($scope.persona, function(){
                  $location.path("#!/")
              })
          }
      }
  });
