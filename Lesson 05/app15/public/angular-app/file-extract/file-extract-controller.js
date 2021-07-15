angular.module('meanGames').controller('UploadContoller',UploadContoller);

function UploadContoller(FileDataFactory){
    const vm=this;
    
 vm.upload=()=>{
    const url={url:"C:/Users/Merry/OneDrive/Documents/Merha.zip"};
    console.log(`send url is ${url}`);
     FileDataFactory.upload(url).then((response)=>{
         
         vm.message="extracted go to downloads/meanGames to view file";
     }).catch((err)=>{
         console.log(`error`);
         vm.err=err;
     })
 }
}