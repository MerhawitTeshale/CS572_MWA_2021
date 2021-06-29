angular.module("myProperApp").factory("JockFactory", JockFactory);

function JockFactory($http){
    return{
        getTenJokes:getTen,
        getOneJoke:getOne
    };

    function getTen(){
        return $http.get("http")
                    .then(complete)
                    .catch(failed);
    }
    function complete(response){

    } 
    function failed(error){
        
    }
    function getOne(){

    }
}