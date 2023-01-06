const express=require('express');
const bodyparser =require('body-parser');
import { Request,Response } from 'express';

const PORT=3000
const api=require('./api')
var cors = require('cors')

const app=express();


app.use(bodyparser.urlencoded())
app.use(bodyparser.json())

app.use(cors())

app.use('/api',api)

app.get('/',(req:Request,res:Response)=>{
    res.send("Application works")
})

app.listen(PORT,()=>{
    console.log("Application started at port:"+PORT)
})