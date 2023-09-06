const express=require('express')
const router=express.Router();
const service=require('../database/services/operations')
const responce=require('../util/responce');



router.get('/getAll',async (req,res)=>{
    await service.getUsers().then(result=>{
        res.status(responce.getStatus(result)).json(responce.getMessage(result));
    });
});



router.post('/add',async (req,res)=>{
    const body=req.body;
    const details=[body.email,body.fname,body.lname,body.mobile,body.dob,body.address];
    await service.addUser(details).then(result=>{
        res.status(responce.getStatus(result)).json(responce.getMessage(result));
    });
})

router.post('/update',async (req,res)=>{
   
    const body=req.body;
    const details=[body.fname,body.lname,body.mobile,body.dob,body.address,body.email];
    await service.updateUser(details).then(result=>{
        res.status(responce.getStatus(result)).json(responce.getMessage(result));
    });


})


router.get('/find/:email',async (req,res)=>{

    const data=req.params.email;
    await service.findUser(data).then(result=>{
        res.status(responce.getStatus(result)).json(responce.getMessage(result));
    });
})

router.delete('/delete/:email',async (req,res)=>{
    const data=req.params.email;
    await service.deleteUser(data).then(result=>{
        res.status(responce.getStatus(result)).json(responce.getMessage(result));
    })
})


module.exports={
    userRouter:router
}
