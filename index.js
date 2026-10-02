// console.log("hii prince")
require('dotenv').config();

const express = require('express');

const app=express();



app.get('/',(req,res)=>{
    res.send("hellow world");
});

app.get("/prince",(req,res)=>{
    res.send("hi am prince");
})

app.get("/h1",(req,res)=>{
    res.send('<h1>hii i am h1</h1>')
})

app.listen(process.env.port,()=>{
    console.log('express app listent on 3000');
})
