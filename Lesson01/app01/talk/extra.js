console.log('start')

const laterWork= setTimeout(()=>{
    // the lambda function here is called the call back funcction
    // this is async function
    console.log("in")
},3000)

console.log("end")

//app04 
//read file

const fs=require("fs");
console.log('get file');
//here if the file is large and takes 3000 ms it means that
// we blocked the rest of the code from executing because it has
// to finish before it goes to the next thing

//const  file=fs.readFileSync('short.txt');
// to avoid this we can use call back
const file =fs.readFile('short.txt',()=>{
    console.log('yay');
})
console.log('reads the file');


// callback best practice write the code outside 

onLodeFunction(){
//better maintainablity
//better readability
//better bug occurance
}

const filename1=fs.readFile('short.txt',onLodeFunction);