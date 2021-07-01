angular.module('meanCar').controller('CarController',CarController);

function CarController(CarDataFactory, $routeParams){
    const vm=this;
    const id=$routeParams.id;
    vm.showText=true;
    CarDataFactory.getOne(id).then(function (response){
        console.log(`response ${response}`);
        vm.car=response;
    });
    vm.deleteCar=function(){
        CarDataFactory.delete(id).then(function(response){
            console.log(`deleting.....................`);
            vm.message="The game is deleted sucessfully";
            vm.showText=false;
            
           // $location.path("/");
        });
}
}