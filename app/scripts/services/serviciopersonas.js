'use strict';

/**
 * @ngdoc service
 * @name cabsaApp.servicioPersonas
 * @description
 * # servicioPersonas
 * Service in the cabsaApp.
 */
angular.module('cabsaApp')
  .service('servicioPersonas', function ($http) {
    var personas = [];
    this.getPersonas = function(cb){
      if (personas.length <= 0) {
          $http.get('personas.json')
              .then(function (res) {
                  personas = res.data;
                  for(var i = 0; i < personas.length; i++){
                      personas[i].cumpleanos = new Date(personas[i].cumpleanos);
                  }
                  cb(personas)
              })
      }else{
        cb(personas);
      }
    }

    this.eliminarPersona = function(id, cb){
      personas.splice(id, 1);
      cb(personas);
    }

    this.getPersona = function(id, cb){
      this.getPersonas(function(respuesta){
          cb(respuesta[id]);
      })
    }

    this.editarPersona = function(id, data, cb){
        personas[id] = data;
        cb(personas);
    }

    this.anadirPersona = function(data, cb){
        personas.push(data);
        cb(personas);
    }

  });
