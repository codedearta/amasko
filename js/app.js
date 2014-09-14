
// Code goes here

var Amasko = angular.module('Amasko', []). // route configuration of view and controllers
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/Behandlungen', {
        templateUrl: 'pages/Behandlungen.html',
        controller: BehandlungenCtrl
    }).  
    when('/Gutscheine', {
        templateUrl: 'pages/Gutscheine.html',
        controller: AmaskoController
    }).
    when('/Gallerie', {
        templateUrl: 'pages/Gallerie.html',
        controller: AmaskoController
    }).
    when('/Shop', {
        templateUrl: 'pages/Shop.html',
        controller: AmaskoController
    }).
    when('/Kontakt', {
        templateUrl: 'pages/Kontakt.html',
        controller: AmaskoController
    }).
    otherwise({
        templateUrl: 'pages/Home.html',
        controller: AmaskoController
    });
}]);


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
    
    $scope.selectSubCategory = new function(page) {
        $scope.template = _.find($scope.templates, { 'page': page });
    }
}

$(document).foundation();