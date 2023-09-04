const express=require('express')
const cors=require('cors');
const bodyparser = require('body-parser')
const app=express()
const User=require('./router/index');



app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(User);


app.listen(5000,()=>{
    console.log('Server is running on port number : --> 5000');
});