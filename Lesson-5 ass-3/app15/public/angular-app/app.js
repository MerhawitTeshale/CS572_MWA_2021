angular.module('meanGames', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($routeProvider,$httpProvider) {

    $httpProvider.interceptors.push("AuthInterceptor");

    $routeProvider.when("/", {
        templateUrl: "angular-app/welcome/welcom.html",
        access:{restricted:false}
    }).when("/games", {
        templateUrl: "angular-app/game-list/game-list.html",
        controller: "MyGameController",
        controllerAs: "vm",
        access:{restricted:false}
    }).when("/games/:id", {
        templateUrl: "angular-app/game-display/game.html",
        controller: "GameController",
        controllerAs: "vm",
        access:{restricted:false}
    }).when("/register", {
        templateUrl: "angular-app/register/register.html",
        controller: "RegisterController",
        controllerAs: "vm",
        access:{restricted:false}
    }).when("/profile", {
        templateUrl: "angular-app/profile/profile.html",
        // controller: "",
        // controllerAs: "",
        access:{restricted:true}
    }).otherwise({
        redirectTo: "/"
    });
}
function run($rootScope,$location, AuthFactroy){
    $rootScope.$on("$routeChangeStart", function(event,nextRoute,currentRoute){
        //check if u can access the next route
        //tokens can be hacked easily by providing token in the console in our browser
        //&& !$window.sessionStorage.token
        if(nextRoute.access!==undefined && nextRoute.access.restricted
             && !AuthFactroy.auth){
            event.preventDefault();//do not go to the path
            $location.path('/');//instead send back to home
        }
    console.log(`i am here...... in run`);
        });
}