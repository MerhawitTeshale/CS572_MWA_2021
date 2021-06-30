angular.module("meanGames").controller('MyGamesController',MyGamesController);

function MyGamesController($http){
    const vm= this;
   // vm.title="Mean Games App"
    $http.get("/api/games").then(function(respnse){
        vm.games=respnse.data;
    });
}