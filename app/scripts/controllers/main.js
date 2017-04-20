'use strict';

/**
 * @ngdoc function
 * @name cabsaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cabsaApp
 */
angular.module('cabsaApp')
  .controller('MainCtrl', function ($scope, servicioPersonas) {

      $scope.personas = [];
      $scope.$on('$viewContentLoaded', function(){
        servicioPersonas.getPersonas(function(respuesta){
             $scope.personas = respuesta;
             renderChart();
          });
      })
      $scope.eliminarPersona = function(persona){
          servicioPersonas.eliminarPersona(persona.id, function(respuesta){
              $scope.personas = respuesta;
              renderChart();

          })
      };

      var renderChart = function(){
          var chartData = [];
          for (var i = 0; i < $scope.personas.length; i++){
              chartData.push([$scope.personas[i].nombre, $scope.personas[i].edad]);
          }
          $("#container").innerHTML = "";
          initChart(chartData);
      }



  });


var initChart = function(chartData){
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Edad de la Población'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Edad (años)'
            }
        },
        legend: {
            enabled: false
        },
        exporting: { enabled: false },
        series: [{
            name: 'Población',
            data: chartData,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                //format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
};

