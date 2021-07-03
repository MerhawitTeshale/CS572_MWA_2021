angular.module("meanGames").factory("AuthInterceptor",AuthInterceptor);

function AuthInterceptor($window){
    return{
        request: request,
        response:response,
        responseError: responseError
    }

    function request(config){
        config.header=config.header||{};
        if($window.sessionStorage.token){
            config.headers.Authorization="Bearer"+$window.sessionStorage
        }
        return config;
    };
    // function response(){
    //     if(response.status===200 && $window.sessionStorage.token && AuthFactory.auth ){

    //     }
    // }
}