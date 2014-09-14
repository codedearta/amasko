
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
      [ { name: 'Gesicht.html', url: 'pages/Behandlungen/Gesicht.html'},
        { name: 'Haende_und_Fuesse.html', url: 'pages/Behandlungen/Haende_und_Fuesse.html'},
        { name: 'Haarentfernung.html', url: 'pages/Behandlungen/Haarentfernung.html'},
        { name: 'Wellness.html', url: 'pages/Behandlungen/Wellness.html'},
        { name: 'Cellulite.html', url: 'pages/Behandlungen/Cellulite.html'},
        { name: 'Fettreduktion.html', url: 'pages/Behandlungen/Fettreduktion.html'},
        { name: 'Powerplate.html', url: 'pages/Behandlungen/Powerplate.html'} 
      ];
    $scope.template = $scope.templates[0];
    
    $scope.selectSubCategory = new function(name) {
        $scope.template = _.find($scope.templates, { 'name': name });
    }
}

$(document).foundation();