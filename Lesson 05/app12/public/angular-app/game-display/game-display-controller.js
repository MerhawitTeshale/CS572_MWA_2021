angular.module('meanGames').controller('GameController',GameController);


function _getStarsArray(rating){
    return new Array(rating);
}
function GameController(GameDataFactroy,$routeParams){
    const vm=this;
    const id=$routeParams.id;
    GameDataFactroy.getOne(id).then(function(response){
        vm.game=response;
        vm.stars=_getStarsArray(response.rate);
    });
}