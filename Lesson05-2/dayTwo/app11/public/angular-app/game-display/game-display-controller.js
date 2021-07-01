angular.module('meanGames').controller('GameController',GameController);


function _getStarsArray(rating){
    return new Array(rating);
}
function GameController(GameDataFactroy,$routeParams,$location){
    const vm=this;
    const id=$routeParams.id;
    GameDataFactroy.getOne(id).then(function(response){
        vm.game=response;
        vm.stars=_getStarsArray(response.rate);
    });
    vm.deleteGame=function(){
        GameDataFactroy.delete(id).then(function(response){
            console.log(`deleting.....................`);
            vm.message="The game is delted sucessfully";
            
           // $location.path("/");
        });
    }
    
}