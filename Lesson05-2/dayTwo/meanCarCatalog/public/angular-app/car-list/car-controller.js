angular.module('meanCar').controller('MyCarController', MyCarController);

function MyCarController(CarDataFactory) {
    const vm = this;
    vm.title = "MEAN Car App";
    console.log("in controller", vm.title);
    CarDataFactory.getAll().then(function (response) {
        vm.cars = response;
        console.log(response.data);
    });
    vm.addCar = function () {
        const postData = {
            name: vm.newCarName,
            model: vm.newCarModel,
            year: vm.newCarYear
        };
        if (vm.carForm.$valid) {
            CarDataFactory.addOne(postData).then(function (response) {
                console.log(`car saved successfully`);
                vm.newCarName = "";
                vm.newCarModel = "";
                vm.newCarYear = "";
                vm.message = "Car Added Succesfully";
            });
        }
    }
}