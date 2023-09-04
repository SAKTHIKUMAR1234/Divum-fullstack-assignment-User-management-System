const express=require('express');
const Router=require('./user')
const router=express.Router();
router.use('/Users',Router.userRouter);
module.exports=router