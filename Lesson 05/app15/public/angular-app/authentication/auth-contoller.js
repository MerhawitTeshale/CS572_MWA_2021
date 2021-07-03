angular.module('meanGames').factory("AuthFactroy",AuthFactroy);

function AuthFactroy(){
    let auth=false;
    return{
        auth:auth
    };
   
}