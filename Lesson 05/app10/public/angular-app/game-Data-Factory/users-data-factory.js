angular.module('meanGames').factory('UsersDataFactroy',usersDataFactroy);

function usersDataFactroy($http){
    return{
        login:getOneUser,
        register:addOneUser
    };

    function getOneUser(){
        return $http.post("api/users/login").then(complete).catch(failed);
    }
    function addOneUser(user){
        return $http.post("api/users", user).then(complete).catch(failed);
    }
    function complete(response){
        console.log(`i have completed the data fecth  and the data is ${response.data}`);
        return response.data;
    }
    function failed(error){
        console.log(`error occured`);
        return error.status.statusText;
    }
    
}