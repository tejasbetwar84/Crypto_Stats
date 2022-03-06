const express=require('express');
const router=express.Router();
const homecontroller=require('../controller/home');

 router.get('/',homecontroller.home);

// setInterval(()=>{
//     console.log("started");
//     router.get('/',homecontroller.home);

// },

// 10000)

module.exports=router;


