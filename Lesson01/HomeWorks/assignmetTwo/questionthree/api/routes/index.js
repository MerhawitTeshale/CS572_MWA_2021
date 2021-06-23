const express= require('express');
 const router=express.Router();
 const multiplyController=require("../controller/multiply.controller");

 router.route('/multiply/:num1').get(multiplyController.getNumber);
 module.exports=router;