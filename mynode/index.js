const express = require("express")
const app=express();

app.get('/',(req,res)=>{
    res.json({'message':'cake factory root'})
})

app.get('/about',(req,res)=>{
    res.json({'message':'cake factory about'})
})


app.listen(8000, ()=>{
    console.log('http://localhost:8000');
})