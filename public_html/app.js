var amasko = angular.module('Amasko', ['ui.router','google-maps', 'mm.foundation']).

config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");

  var viewsPath = 'views/'
  var treatmentsPath = viewsPath + 'treatments/';
  //
  // Now set up the states
  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: viewsPath + 'home/home.html'
    })
    .state('Behandlungen', {
      url: '/Behandlungen',
      templateUrl: treatmentsPath + 'treatments.html',
      controller: function($scope, $state) {
        $state.go('Behandlungen.Gesicht');
        $scope.selected = 'Gesicht';
      }
    })
    .state('Behandlungen.Gesicht', {
      url: "/Gesicht",
      templateUrl: treatmentsPath + 'gesicht.html',
    })
    .state('Behandlungen.Haende_und_Fuesse', {
      url: "/Haende_und_Fuesse",
      templateUrl: treatmentsPath + 'haende_und_fuesse.html',
    })
    .state('Behandlungen.Haarentfernung', {
      url: "/Haarentfernung",
      templateUrl: treatmentsPath + 'haarentfernung.html',
    })
    .state('Behandlungen.Wellness', {
      url: "/Wellness",
      templateUrl: treatmentsPath + 'wellness.html',
    })
    .state('Behandlungen.Cellulite', {
      url: "/Cellulite",
      templateUrl: treatmentsPath + 'cellulite.html',
    })
    .state('Behandlungen.Fettreduktion', {
      url: "/Fettreduktion",
      templateUrl: treatmentsPath + 'fettreduktion.html',
    })
    .state('Behandlungen.Powerplate', {
      url: "/Powerplate",
      templateUrl: treatmentsPath + 'powerplate.html',
    })  
  
    .state('Gutscheine', {
      url: "/Gutscheine",
      templateUrl: viewsPath + 'coupons/coupons.html'
    })
    .state('Gallerie', {
      url: '/Gallerie',
      templateUrl: viewsPath + 'gallery/gallery.html'
    })
    .state('Shop', {
      url: '/Shop',
      templateUrl: viewsPath + 'Shop/Shop.html'
    })
    .state('Kontakt', {
      url: '/Kontakt',
      templateUrl: viewsPath + 'contact/contact.html',
    });
});

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