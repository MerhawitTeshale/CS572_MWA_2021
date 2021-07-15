angular.module("meanJobs").factory("AuthInterceptor", AuthInterceptor);

function AuthInterceptor($window) {
    return {
        request: request,
    }

    function request(config) {
        config.header = config.header || {};
        if ($window.sessionStorage.token) {
            config.headers.Authorization = "Bearer " + $window.sessionStorage.token;
        }
        return config;
    };
}
    