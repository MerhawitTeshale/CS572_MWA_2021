angular.module("meanGames").controller("RegisterController", RegisterController);

function RegisterController(UsersDataFactroy){
 const vm=this;
 vm.register=function(){
     if(!vm.username||!vm.password||!vm.passwordRepeat||!vm.name){
         vm.err="please make sure you fill all the form";
     } else{
         if(!vm.password===vm.passwordRepeat){
            vm.err="please make sure the password is correct";
         }else{
            const newUser={
                username:vm.username,
                password:vm.password,
                name:vm.name
            }
            UsersDataFactroy.register(newUser).then(function(response){
                console.log(`register done`);
                vm.message="successful registration please login";
                vm.err="";
            }).catch(function(err){
                console.log(`error ${err}`);
                vm.err=err;
            })
         }
     }
 }
}