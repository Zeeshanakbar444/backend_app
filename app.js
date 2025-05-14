const express = require("express");
const app = express();
require('dotenv').config()
app.get("/" , (req,res)=>{
res.send("<h1>Hello world<h1/>")
})
app.get("/login" , (req,res)=>{
res.send("<h1>Login page<h1/>")
})

app.listen(process.env.PORT , ()=>{
    console.log(`the serverin running on ${process.env.PORT}`);
    
})