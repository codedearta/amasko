/*jslint browser: true, white: true */
/*global $, angular, amasko */

amasko.controller('MapCtrl', function($scope) {
  'use strict';
  $scope.map = { 
                  center: {   
                    latitude: 47.372172,
                    longitude: 8.534329
                  },
                  zoom: 17
                };

  $scope.options = { scrollwheel: false };
  $scope.marker = {
                    id:0,
                    coords: {
                      latitude: 47.372172,
                      longitude: 8.534329
                    },
                    options: { 
                      draggable: false,
                      title: "AMASKO"
                    }
                  };
});