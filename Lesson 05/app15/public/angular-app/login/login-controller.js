angular.module('meanGames').controller("LoginController",LoginController);

function LoginController(UsersDataFactroy,AuthFactroy,$window,jwtHelper,$location){
    const vm=this;
    vm.loggedinUser="";
    vm.isLoggedIn=function(){
        return AuthFactroy.auth;
    }
    vm.login=function(){
        if(vm.username && vm.password){
            console.log(`user name and password is provided`);
            const user={
                username:vm.username,
                password:vm.password
            };
            UsersDataFactroy.login(user).then(function(result){
                console.login(`result ${result}`);
               $window.sessionStorage.token=result.token;
                AuthFactroy.auth=true;
                //get payload from the token
                const token= $window.sessionStorage.token
                const decodedToken=jwtHelper.decodeToken(token);
                vm.username="";
                vm.password="";
                vm.loggedinUser=decodedToken.username;
                $location.path("/");
            }).catch(function(err){ 
                console.log(`error occured ${err}`);
            });
        }
    }
    vm.logout=function(){
        AuthFactroy.auth=false;
        delete $window.sessionStorage.token;
        $location.path("/");
    }

    vm.isActiveTab=function(url){
        console.log(`${$location.path()}`);
        const currentPath=$location.path().split("/")[1];
        return (url==currentPath?"active":"");
    }
}