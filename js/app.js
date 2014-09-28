var amasko = angular.module('Amasko', ['ui.router','google-maps', 'mm.foundation']).

config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/Home");
  //
  // Now set up the states
  $stateProvider
    .state('Home', {
      url: '/Home',
      templateUrl: 'pages/Home.html'
    })
    .state('Behandlungen', {
      url: '/Behandlungen',
      templateUrl: 'pages/Behandlungen.html',
      controller: function($scope, $state) {
        $state.go('Behandlungen.Gesicht');
        $scope.selected = 'Gesicht';
      }
    })
    .state('Behandlungen.Gesicht', {
      url: "/Behandlungen/Gesicht",
      templateUrl: "pages/Behandlungen/Gesicht.html",
      controller: function($scope){
          $scope.oneAtATime = true;
      }
    })
    .state('Behandlungen.Haende_und_Fuesse', {
      url: "/Behandlungen/Haende_und_Fuesse",
      templateUrl: "pages/Behandlungen/Haende_und_Fuesse.html",
    })
    .state('Behandlungen.Haarentfernung', {
      url: "/Behandlungen/Haarentfernung",
      templateUrl: "pages/Behandlungen/Haarentfernung.html",
    })
    .state('Behandlungen.Wellness', {
      url: "/Behandlungen/Wellness",
      templateUrl: "pages/Behandlungen/Wellness.html",
    })
    .state('Behandlungen.Cellulite', {
      url: "/Behandlungen/Cellulite",
      templateUrl: "pages/Behandlungen/Cellulite.html",
    })
    .state('Behandlungen.Fettreduktion', {
      url: "/Behandlungen/Fettreduktion",
      templateUrl: "pages/Behandlungen/Fettreduktion.html",
    })
    .state('Behandlungen.Powerplate', {
      url: "/Behandlungen/Powerplate",
      templateUrl: "pages/Behandlungen/Powerplate.html",
    })  
  
    .state('Gutscheine', {
      url: "/Gutscheine",
      templateUrl: "pages/Gutscheine.html"
    })
    .state('Gallerie', {
      url: '/Gallerie',
      templateUrl: 'pages/Gallerie.html'
    })
    .state('Shop', {
      url: '/Shop',
      templateUrl: 'pages/Shop.html'
    })
    .state('Kontakt', {
      url: '/Kontakt',
      templateUrl: 'pages/Kontakt.html',
      controller: function($scope) {
        $scope.map = 
            {
                center: 
                    {   
                        latitude: 47.372172,
                        longitude: 8.534329
                    },
                zoom: 17
            };
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            id:0,
            coords: {
                latitude: 47.372172,
                longitude: 8.534329
            },
            options: { draggable: true,
                       title: "AMASKO"
                     },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    $log.log(marker.getPosition().lat());
                    $log.log(marker.getPosition().lng());
                }
            }
        }
      }
    });
});

amasko.controller('TopBarCtrl', function($scope){
            $scope.selected = '';
})

$(document).foundation({
  accordion: {
    // specify the class used for active (or open) accordion panels
    active_class: 'active',
    // allow multiple accordion panels to be active at the same time
    multi_expand: false,
    // allow accordion panels to be closed by clicking on their headers
    // setting to false only closes accordion panels when another is opened
    toggleable: true
  }
});