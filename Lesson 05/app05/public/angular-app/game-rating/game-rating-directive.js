//we use the directive like game-rating but we name it camel case here
angular.module("meanGames").directive('gameRating', GameRating);

function GameRating(){
    return{
        restrict:"E",
        templateUrl:"angular-app/game-rating/rating.html",
        bindToController:true,
        controller:"GameController",
        controllerAs:"vm",
        // scope:{
           
            //newStars:'=stars'

        // }
    };
}