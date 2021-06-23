module.exports.getNumber=(req,res)=>{
 console.log(`${req.query}`);

 let num1;
 let num2;
 num1=parseInt(req.params.num1);
 if(req.query&&req.query.num2){
    num2=parseInt(req.query.num2);
    let result=num1*num2;
    res.status(200).send(` ${num1}* ${num2} = ${result}`);
}else{
    res.send(`provide the second number`);
}



};