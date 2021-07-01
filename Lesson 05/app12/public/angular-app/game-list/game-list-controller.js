angular.module('meanGames').controller('MyGameController',MyGameController);

function MyGameController(GameDataFactroy,AuthFactroy){
    const vm=this;
     vm.title="MEAN Games App";
     GameDataFactroy.getAll().then(function (response){
        vm.games=response;
     });
     vm.isLoggedIn=function (){
        AuthFactroy.auth=true;
     }
     vm.addGame=function(){
        const postData={
         title:vm.newGameTitle,
         price:vm.newGamePrice,
         year:vm.newGameYear,
         rate:vm.newGameRating,
         minPlayers:vm.newGameMinPlayers,
         maxPlayers:vm.newGameMaxPlayers,
         minAge:vm.newGameMinAge,
         designers:vm.newGameDesigner
        };
        if(vm.gameForm.$valid){
           GameDataFactroy.addOne(postData).then(function(response){
            console.log(`game saved`);
           }).catch(function(error){
              console.log(error)
           });
        } else{
           vm.isSubmited=true;
        }
     };
}