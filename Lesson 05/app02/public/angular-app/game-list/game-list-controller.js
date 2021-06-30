angular.module("meanGames").controller('MyGamesController',MyGamesController);

function MyGamesController(GamesDataFactory){
    const vm= this;
    vm.title="Mean Games App";
    GamesDataFactory.getAll().then(function(response){

            vm.games=response;
    });
}