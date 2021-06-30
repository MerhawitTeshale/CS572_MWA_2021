angular.module('meanCar',['ngRoute']).config(config);
function config($routeProvider){
 $routeProvider.when("/",{
    templateUrl:"angular-app/car-list/car-list.html",
    controller:"MyCarController",
    controllerAs:"vm"
 }).when("/cars/:id",{
    templateUrl:"angular-app/car-display/car-display.html",
    controller:"CarController",
    controllerAs:"vm"
 });
}