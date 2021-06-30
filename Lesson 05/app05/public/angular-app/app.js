angular.module("meanGames",['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"angular-app/game-list/game-list.html",
        controller:"MyGamesController",
        controllerAs:"vm"
    }).when("/games/:id",{
        templateUrl:"angular-app/game-list/game-display/game.html",
        controller:"GameControler",
        controllerAs:"vm"
    });
}