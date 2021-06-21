const child_process=require("child_process");

console.log('started')
const newProcess= child_process.spawn('node',['computation/_fibonacci'],
                                {stdio:'inherit'});
                                // adding the stdio will make the result to be printed and this will late the parent and the child to run at the same io

console.log('end');