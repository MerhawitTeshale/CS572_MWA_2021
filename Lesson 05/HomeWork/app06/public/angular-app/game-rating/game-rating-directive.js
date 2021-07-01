//directive name has to be camel case
angular.module('meanGames').directive('gameRating',GameRating);

function GameRating(){
   return{ 
            restirct:"E",
            templateUrl:"angular-app/game-rating/rating.html",
            bindToController:true,
            controller:"GameController",
            controllerAs:"vm"
        };
}
