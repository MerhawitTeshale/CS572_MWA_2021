angular.module('meanCity').controller('CityController',CityController);


function CityController(CityDataFactory,$routeParams,$location){
    const vm=this;
    const id=$routeParams.id;
    vm.showDetaile=true;
    
    CityDataFactory.getOne(id).then(response=>{
        vm.city=response;
    });


    
    vm.deleteCity= function(){
        CityDataFactory.delete(id).then(response=>{
            console.log(`city is deleted`);
            vm.showDetaile=false;
            $location.path('/');
        });
    }

}