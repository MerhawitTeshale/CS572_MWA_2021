angular.module('meanCar').controller('MyCarController', MyCarController);

function MyCarController(CarDataFactory) {
    const vm = this;
    vm.title = "MEAN Car App";
    console.log("in controller", vm.title);
    CarDataFactory.getAll().then(function(response){
        vm.cars=response;
        console.log(response.data);
    });
}