const express= require('express');
const router=express.Router();

router.route('/json').get((req,res)=>{
    console.log('json GET');
    res.status(200).json({
        "sucess":true
    });
 })
 .post((req,res)=>{
     console.log('json POST');
     res.status(200).json({
        "sucess":true
    });
 });

 module.exports=router;