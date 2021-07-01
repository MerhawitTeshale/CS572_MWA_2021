angular.module('meanGames').directive("gameDeleted",GameDeleted);

function GameDeleted(){
    return{ 
        restirct:"E",
        templateUrl:"angular-app/delete-game/delete-game.html",
        bindToController:true,
        controller:"GameController",
        controllerAs:"vm"
    };
}