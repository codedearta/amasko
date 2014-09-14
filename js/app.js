
// Code goes here

var Amasko = angular.module('Amasko', ['ui.router']). // route configuration of view and controllers
//config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.
//    when('/Behandlungen', {
//        templateUrl: 'pages/Behandlungen.html',
//        controller: BehandlungenCtrl
//    }).    
//    when('/Behandlungen/Gesicht', {
//        templateUrl: 'pages/Behandlungen.html',
//        controller: BehandlungenCtrl
//    }).
//    when('/Behandlungen/Haende_und_Fuesse', {
//        templateUrl: 'pages/Behandlungen.html',
//        controller: BehandlungenCtrl
//    }).  
//       
//    when('/Gutscheine', {
//        templateUrl: 'pages/Gutscheine.html',
//        controller: AmaskoController
//    }).
//    when('/Gallerie', {
//        templateUrl: 'pages/Gallerie.html',
//        controller: AmaskoController
//    }).
//    when('/Shop', {
//        templateUrl: 'pages/Shop.html',
//        controller: AmaskoController
//    }).
//    when('/Kontakt', {
//        templateUrl: 'pages/Kontakt.html',
//        controller: AmaskoController
//    }).
//    otherwise({
//        templateUrl: 'pages/Behandlungen.html',
//        controller: AmaskoController
//    });
//}]);

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
      templateUrl: 'pages/Behandlungen.html'
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
      templateUrl: 'pages/Kontakt.html'
    });
});


function AmaskoController($scope) {
  $scope.name = 'Welcome to Amasko';
}

function BehandlungenCtrl($scope) {
  $scope.name = 'Welcome to Amasko';
    $scope.templates =
      [ { page: 'Gesicht.html', url: 'pages/Behandlungen/Gesicht.html'},
        { page: 'Haende_und_Fuesse.html', url: 'pages/Behandlungen/Haende_und_Fuesse.html'},
        { page: 'Haarentfernung.html', url: 'pages/Behandlungen/Haarentfernung.html'},
        { page: 'Wellness.html', url: 'pages/Behandlungen/Wellness.html'},
        { page: 'Cellulite.html', url: 'pages/Behandlungen/Cellulite.html'},
        { page: 'Fettreduktion.html', url: 'pages/Behandlungen/Fettreduktion.html'},
        { page: 'Powerplate.html', url: 'pages/Behandlungen/Powerplate.html'} 
      ];
    $scope.template = $scope.templates[0];
    
    $scope.selectSubCategory = function(page) {
        $scope.template = _.find($scope.templates, { 'page': page });
    }
}

$(document).foundation();