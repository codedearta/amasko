
// Code goes here

var Amasko = angular.module('Amasko', []). // route configuration of view and controllers
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/Behandlungen', {
        templateUrl: 'pages/Behandlungen.html',
        controller: AmaskoController
    }).
    when('/Gutscheine', {
        templateUrl: 'pages/Gutscheine.html',
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

$(document).foundation();