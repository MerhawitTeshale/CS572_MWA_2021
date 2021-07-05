
angular.module('meanCity').controller('CityListController', CityListController);


function CityListController(CityDataFactory) {
    const vm = this;
   
    vm.showButton = true;
    vm.showForm = false;
    vm.title = " Enjoy Cities";
    vm.backButton = false;
    vm.nextButton = true;
    vm.showResult=false;


    CityDataFactory.getAll().then(response => {
        vm.cities = response;
    });



    vm.addButton = function () {
        vm.showForm = true;
        vm.showButton = false;
    }
    
    vm.search=function(){
        
        if(vm.lat&&vm.lng &&vm.far){
            let lng=vm.lng;
            let lat=vm.lat;
            let far=vm.far;
            CityDataFactory.search(lng,lat,far).then(response=>{
                console.log(`here at city controller.....`)
                vm.cities=response;
                vm.showResult=true;
                //console.log(response);
            });
        }
    }

}

