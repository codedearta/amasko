amasko.controller('MapCtrl', function($scope) {
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
                      draggable: true,
                      title: "AMASKO"
                    },
                    events: {
                      dragend: function (marker, eventName, args) {
                        $log.log('marker dragend');
                        $log.log(marker.getPosition().lat());
                        $log.log(marker.getPosition().lng());
                      }
                    }
                  };
});