angular.module('meanJobs').factory("AuthFactroy",AuthFactroy);

function AuthFactroy(){
    let auth=false;
    return{
        auth:auth
    };
   
}