console.log(`App Started`);
const promise1= new Promise((resolve,reject)=>{
    let number =Math.random()+0.5;
    setTimeout(function(){
        if(number>0.5){
            resolve(number);
        } else{
            reject(`reject promise 1 failed`);
        }
    });
},3000);
const promise2= new Promise((resolve,reject)=>{
    let number =Math.random()+0.5;
    setTimeout(function(){
        if(number>0.5){
            resolve(number);
        } else{
            reject(`reject promise 2 failed`);
        }
    });
},3000);
const promise3= new Promise((resolve,reject)=>{
    let number =Math.random()+0.5;
    setTimeout(function(){
        if(number>0.5){
            resolve(number);
        } else{
            reject(`reject promise 3 failed`);
        }
    });
},3000);
//////////// this is how we use it form the user perspective
//having the function calls named resolves the DLL hell problem
const handleError =(err)=>{
    console.log(err);
}
const PrintResult =(number)=>{
    console.log(`promise done with value ${number}`);
}

//promise1.then(PrintResult).catch(handleError);
// console.log(promise1);// this will return us the status of the promise 

// setTimeout(function(){
// console.log(promise1);
// },4000);

//this will result of array of numbers that succeded however if one of them failed 
//the whole thing failes. 
// 
// Promise.all([promise1, promise2, promise3])
//                     .then(PrintResult).catch(handleError);
// Promise.race([promise1, promise2, promise3])
// .then(PrintResult).catch(handleError);

async function mySyncFun(){
    console.log(`start sync`);
    const result1=await promise1;
    console.log(result1);
    const result2=await promise2;
    console.log(result2);
    const result3= promise3;
    console.log(result3);
    console.log(`end sync`);
}
mySyncFun();
console.log(`App Ended`);