const extract=require('extract-zip');
console.log(`hello app started`);
async function main(){
    try{
        await extract("input/New folder.zip",{dir:"C:/Users/Merry/OneDrive/CS572/Lesson 05/app15/api/controller/input"});
        console.log(`Extraction complete`);
    } catch(err){
        console.log(err);
        console.log(`Error decompressing`);
    }
}
main();
console.log(`bye app closed`);