angular.module('myProperApp').factory("verseFactory",verseFactory);

function verseFactory($http){
    return{
        getVerse:getVerse
    };

    function getVerse($http){
        return $http.get("https://collectionapi.metmuseum.org/public/collection/v1/departments")
                    .then(complete)
                    .catch(failed);
    };
    function completed(response){

    }
    function failed(err){
        
    }
}