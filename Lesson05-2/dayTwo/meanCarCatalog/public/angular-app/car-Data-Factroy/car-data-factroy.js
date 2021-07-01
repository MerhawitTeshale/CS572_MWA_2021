angular.module('meanCar').factory('CarDataFactory',CarDataFactory);

function CarDataFactory($http){
    return {
        getAll:getAllCars,
        getOne:getOneCar,
        addOne:addOneCar,
        delete:deleteCar
    }
    function getAllCars(){
        console.log(`i am here in df`)
        return $http.get("api/cars").then(complete).catch(failed);
    };
    function getOneCar(id){
        return $http.get("api/cars/"+id).then(complete).catch(failed);
    };
    function deleteCar(id){
        return $http.delete("api/cars/"+id).then(complete).catch(failed);
    };
    function addOneCar(car){
        return $http.post("api/cars",car).then(complete).catch(failed);
    };
    function complete(response){
        return response.data;
    }
    function failed(error){
        return error.status.statusText;
    }
}