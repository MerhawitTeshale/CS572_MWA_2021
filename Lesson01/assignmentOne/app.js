const child_process =require('child_process');
console.log('1:Started');
const newProcess=child_process.spawn('node',['computation/_fibonacci'],{stdio:'inherit'});
console.log('2:End');