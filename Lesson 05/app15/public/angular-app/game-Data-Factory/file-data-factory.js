angular.module('meanGames').factory('FileDataFactory',FileDataFactory);

function FileDataFactory($http){
    return{
        upload:uploadFile
    }
    function uploadFile(url){
        console.log(`the url is ${url}`);
        return $http.post("api/extract",url).then(complete).catch(failed);
    }
    function complete(response){
        console.log(`file extract`);
        return response.message;
    }
    function failed(err){
        console.log(`error occured in datafactory ${err}`);
        return err.status.statusText;
    }
}