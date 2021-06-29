angular.module("myProperApp", ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "mainPage/main.html",
        controller: "MainController",
        controllerAs: "mainCtrl"
    }).otherwise({
        redirectTo: '/'
    });
}