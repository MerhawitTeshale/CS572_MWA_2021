angular.module("meanGames").controller('GameControler',GameControler);

function _getStarsArray(rating){
    return new Array(rating);
}
function GameControler(GamesDataFactory){
    const vm=this;
    vm.title="MEAN Games";
    const gameId=$routeParams.id;
    GamesDataFactory.getOne(gameId).then(function(response){
        console.log(`data returned in game display ${response}`);
        vm.game=response;
        vm.stars=_getStarsArray(vm.game.rate);
    });
}