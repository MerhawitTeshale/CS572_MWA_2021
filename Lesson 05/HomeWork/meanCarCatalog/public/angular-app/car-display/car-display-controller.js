angular.module('meanCar').controller('CarController',CarController);

function CarController(CarDataFactory, $routeParams){
    const vm=this;
    const id=$routeParams.id;
    CarDataFactory.getOne(id).then(function (response){
        console.log(`response ${response}`);
        vm.car=response;
    });
}