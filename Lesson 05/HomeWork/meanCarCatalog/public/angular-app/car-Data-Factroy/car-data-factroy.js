angular.module('meanCar').factory('CarDataFactory',CarDataFactory);

function CarDataFactory($http){
    return {
        getAll:getAllCars,
        getOne:getOneCar
    }
    function getAllCars(){
        console.log(`i am here in df`)
        return $http.get("api/cars").then(complete).catch(failed);
    };
    function getOneCar(id){
        return $http.get("api/cars/"+id).then(complete).catch(failed);
    };
    function complete(response){
        return response.data;
    }
    function failed(error){
        return error.status.statusText;
    }
}