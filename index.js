const express=require('express')
const app=express();
const db=require('./db')

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body


app.get('/',function(req,res){
    res.send("Welcome to assistant portal ....Get all details at one place")
})

const assistantroutes=require('./routes/assistantroutes');
app.use('/assistant',assistantroutes)



app.listen(3000, ()=>{
       console.log("Server Running successfull");
})