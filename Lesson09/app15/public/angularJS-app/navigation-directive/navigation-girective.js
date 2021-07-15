angular.module('meanGames').directive('gamesNavigation', GamesNavigation);

function GamesNavigation(){
    return{
        restrict:"E",
        templateUrl:"angularJS-app/navigation-directive/navigation-directive.html"
    }
}