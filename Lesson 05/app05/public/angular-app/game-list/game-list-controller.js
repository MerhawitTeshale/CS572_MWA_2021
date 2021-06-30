angular.module("meanGames").controller('MyGamesController',MyGamesController);

function MyGamesController(GamesDataFactory){
    const vm= this;
    vm.title="Mean Games App"
    // $http.get("/api/games").then(function(respnse){
        GamesDataFactory.getAll().then(function(response){
            console.log(`my games ${response.data}`)
            vm.games=response.data;
    });
    vm.addGame=function(){
        const postData={
            title:vm.newGameTittle,
            price:vm.newGamePrice,
            year:vm.newGameYear,
            minplayer:vm.newGameMinPlayers,
        };

        //check if form is valid 
        if(vm.gameForm.$valid){
            //call RestAPI
            GamesDataFactory.addOne(postData).then(function(response){
                console.log( `game saved`);
            }).catch(function (err){
                console.log(`error while saving`);
            });
        }
    }
}