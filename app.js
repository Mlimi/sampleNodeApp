const express= require('express');
const app=express();

app.get('/',(req,res)=>{
   res.send("Welcome To the homepage");
});

var port= process.env.port || 3000;
app.listen(port,()=>{
    console.log("Whats Up");
});