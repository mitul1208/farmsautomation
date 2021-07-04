angular.module('FarmAutomationApp', [
  'FarmAutomationApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/home", {templateUrl: "home.html", controller: "FarmAutomationAppController"}).
	when("/team", {templateUrl: "team.html", controller: "FarmAutomationAppController"}).
  when("/about", {templateUrl: "about-us.html", controller: "FarmAutomationAppController"}).
  when("/faq", {templateUrl: "faq.html", controller: "FarmAutomationAppController"}).
  when("/404-error-page", {templateUrl: "404-error-page.html", controller: "FarmAutomationAppController"}).
  when("/blog-grid", {templateUrl: "blog-grid.html", controller: "FarmAutomationAppController"}).
  when("/blog-left-sidebar", {templateUrl: "blog-left-sidebar.html", controller: "FarmAutomationAppController"}).
  when("/blog-right-sidebar", {templateUrl: "blog-right-sidebar.html", controller: "FarmAutomationAppController"}).
  when("/blog-single", {templateUrl: "blog-single.html", controller: "FarmAutomationAppController"}).
  when("/careers", {templateUrl: "careers.html", controller: "FarmAutomationAppController"}).
  when("/contact", {templateUrl: "contact.html", controller: "FarmAutomationAppController"}).
  when("/gallery-four-columns", {templateUrl: "gallery-four-columns.html", controller: "FarmAutomationAppController"}).
	when("/gallery-three-columns", {templateUrl: "gallery-three-columns.html", controller: "FarmAutomationAppController"}).
  when("/gallery-two-columns", {templateUrl: "gallery-two-columns.html", controller: "FarmAutomationAppController"}).
  otherwise({redirectTo: '/home'});
}]);