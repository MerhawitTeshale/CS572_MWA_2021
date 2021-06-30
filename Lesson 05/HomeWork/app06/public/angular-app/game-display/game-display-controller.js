angular.module('meanGames').controller('GameController',GameController);

function GameController(GameDataFactroy,$routeParams){
    const vm=this;
    const id=$routeParams.id;
    GameDataFactroy.getOne(id).then(function(response){
        vm.game=response;
    });
}