angular.module('FarmAutomationApp', [
  'FarmAutomationApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/home", {templateUrl: "home.html", controller: "FarmAutomationAppController"}).
	when("/team", {templateUrl: "team.html", controller: "FarmAutomationAppController"}).
  when("/about", {templateUrl: "about-us.html", controller: "FarmAutomationAppController"}).
	otherwise({redirectTo: '/home'});
}]);