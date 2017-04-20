'use strict';

/**
 * @ngdoc function
 * @name cabsaApp.controller:detallePersonaCtrl
 * @description
 * # detallePersonaCtrl
 * Controller of the cabsaApp
 */
angular.module('cabsaApp')
  .controller('detallePersonaCtrl', function ($routeParams, $location, $scope, servicioPersonas) {
      servicioPersonas.getPersona($routeParams.id, function(result){
          $scope.persona = result;
      });

      $scope.editarPersona = function(validForm){
          if(validForm){
              servicioPersonas.editarPersona($routeParams.id, $scope.persona, function(){
                $location.path("#!/")
              })
          }
      }
  });
