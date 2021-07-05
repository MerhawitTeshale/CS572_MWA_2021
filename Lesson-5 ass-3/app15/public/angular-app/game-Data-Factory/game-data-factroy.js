angular.module('meanGames').factory('GameDataFactroy',GameDataFactroy);

function GameDataFactroy($http){
    return{
        getAll:getAllGames,
        getOne:getOneGame,
        addOne:addOneGame,
        delete:deleteGame
    };

    function getAllGames(){
        return $http.get("api/games").then(complete).catch(failed);
    }

    function getOneGame(id){
        return $http.get("api/games/"+id).then(complete).catch(failed);
    }
    function addOneGame(game){
        console.log(`i am in addone game data factory`);
        return $http.post("api/games", game).then(complete).catch(failed);
    }
    function deleteGame(id){
        console.log(`in delete..........`)
        return $http.delete("api/games/"+id).then(complete).catch(failed);
    }
    function complete(response){
       // console.log(`i have completed the data fecth  and the data is ${response.data}`);
        return response.data;
    }
    function failed(error){
        console.log(`error occured`);
        return error.status.statusText;
    }
    
}