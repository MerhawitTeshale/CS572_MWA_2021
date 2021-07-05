angular.module('meanCity').factory('CityDataFactory', CityDataFactory);

function CityDataFactory($http) {
    return {
        getAll: getAllCities,
        search:getCloseCity,
        getOne: getOneCity,
        addOne:addOneCity,
        delete: deleteCity,
        
    }

    function getAllCities() {
        return $http.get('api/cities').then(complete).catch(failed);
    }
    function getCloseCity(lng,lat,far){
        return $http.get('api/cities?lng='+lng+'&lat='+lat+'&far='+far).then(complete).catch(failed);
    }

    function getOneCity(id) {
        return $http.get('api/cities/' + id).then(complete).catch(failed);
    }

    function addOneCity(newCity){
        return $http.post('api/cities',newCity).then(complete).catch(failed);
    }


    function deleteCity(id) {
        return $http.delete('api/cities/' + id).then(complete).catch(failed);
    }
    
    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}