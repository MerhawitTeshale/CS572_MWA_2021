angular.module('meanGames').controller('MyGameController',MyGameController);

function MyGameController(GameDataFactroy){
    const vm=this;
     vm.title="MEAN Games App";
     GameDataFactroy.getAll().then(function (response){
        vm.games=response;
     });
}