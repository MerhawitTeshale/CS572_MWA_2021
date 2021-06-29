angular.module('myProperApp').factory("verseFactory",verseFactory);

function verseFactory($http){
    return{
        getVerse:getVerse
    };

    function getVerse($http){
        return $http.get("https://www.abibliadigital.com.br/api/verses/nvi/sl/23")
                    .then(complete)
                    .catch(failed);
    };
    function completed(response){

    }
    function failed(err){
        
    }
}