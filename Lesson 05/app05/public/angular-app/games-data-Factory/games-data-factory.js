angular.module("meanGames").factory('GamesDataFactory',GamesDataFactory);

function GamesDataFactory($http){
    return{
        getAll:getAllGames,
        getOne:getOneGame,
        addOne:addOneGame
    };

    function getAllGames(){
        console.log(`am i here??`)
        return $http.get("api/games").then(complete).catch(failed)
    }
    function getOneGame(id){
        return $http.get("/api/games/"+id).then(complete).catch(failed);
        
    }
    function addOneGame(){
        return $http.post("api/games",game).then(complete).catch(failed)

    }
    function complete(response){
        console.log(`this is the response from datafactory ${response.data}`)
        return response.data;
    }
    function failed(err){
        console.log(`the error is ${err}`)
        err.status.statusText;
    }
}