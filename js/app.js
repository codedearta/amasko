var Amasko = angular.module('Amasko', ['ui.router','google-maps', 'mm.foundation']).

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
      controller: function($scope) {
        $scope.oneAtATime = true;
        //$scope.isOpen = false;
      }
    })
    .state('Behandlungen.Gesicht', {
      url: "/Behandlungen/Gesicht",
      templateUrl: "pages/Behandlungen/Gesicht.html",
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

        var ll = new google.maps.LatLng(47.372172,8.534329);
        $scope.mapOptions = {
            center: ll,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        //Markers should be added after map is loaded
        $scope.onMapIdle = function() {
            if ($scope.myMarkers === undefined){    
                var marker = new google.maps.Marker({
                    map: $scope.myMap,
                    position: ll
                });
                $scope.myMarkers = [marker, ];
            }
        };

        $scope.markerClicked = function(m) {
            window.alert("clicked");
        };
      }
    });
});


$(document).foundation();