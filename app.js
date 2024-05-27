
 const express =require("express");
const morgan = require("morgan");

const Routes=require('./routes/router')
 const app = new express();
 require('dotenv').config()
const PORT= process.env.PORT ;

app.use(morgan("dev"))

app.use(express.json())

 app.use('/',Routes)
 app.get('*',async(req,res)=>{
    res.status(404).send("No API found")
 })


 app.listen(PORT,()=>{
    console.log(`Server is runnig  ${PORT}`)
 })


