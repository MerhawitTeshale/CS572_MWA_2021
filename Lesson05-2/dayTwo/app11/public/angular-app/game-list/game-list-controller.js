angular.module('meanGames').controller('MyGameController', MyGameController);

function MyGameController(GameDataFactroy) {
   const vm = this;
   vm.title = "MEAN Games App";
   GameDataFactroy.getAll().then(function (response) {
      vm.games = response;
   });

   vm.addGame = function () {
      const postData = {
         title: vm.newGameTitle,
         price: vm.newGamePrice,
         year: vm.newGameYear,
         rate: vm.newGameRating,
         minPlayers: vm.newGameMinPlayers,
         maxPlayers: vm.newGameMaxPlayers,
         minAge: vm.newGameMinAge,
         designers: vm.newGameDesigner,
      };
      if (vm.gameForm.$valid) {
         GameDataFactroy.addOne(postData).then(function (response) {
            console.log(`game saved`);
            vm.newGameTitle = "";
            vm.newGamePrice = "";
            vm.newGameYear = "";
            vm.newGameRating = "";
            vm.newGameMinPlayers = "";
            vm.newGameMaxPlayers = "";
            vm.newGameMinAge = "";
            vm.newGameDesigner = "";
            vm.message = "Game Saved Successfully";
         }).catch(function (error) {
            console.log(error)
         });
      } else {
         vm.isSubmited = true;
      }
   };
}