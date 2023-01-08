import express from 'express';
import { Request, Response } from 'express';


const app = express();
var cors = require('cors');
const jwt =require('jsonwebtoken');
var bodyParser = require('body-parser');


var cors=require('cors')

var employee_object = require('./employee.json');
console.log(employee_object)

var port = process.env.PORT || 3000;


const router = express.Router()


function verifyToken(req,res,next){
  if(!req.headers.authorization){
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null'){
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token,'secretKey')
  if(!payload){
    return res.status(401).send('Unauthorized request')
  }
  req.email = payload.subject
  next()
}

router.get('/', (req: Request, res: Response) => {
  res.send(' Hello !! Application works!');
});

router.post('/login',function(req,res){
  let userData =req.body;
  if(userData.email === "vighnesha@gmail.com" && userData.password ==="Hello@28"){
    //Generate jwt token
      let payload = {subject: userData.email}
      let token = jwt.sign(payload,'secretKey')
      res.status(200).send({token})
  }
  else{
      res.status(401).send('Invalid email and password')
  }
})

router.get('/employee',verifyToken,function(req,res){ //here we verify whether token is present or not
  res.status(200).send(employee_object);
})



module.exports =router

/*Understanding implementation of multiple middleware

function display(req,res,next){
  console.log("In display");
  next()
}

function display2(req,res,next){
  console.log("In display 2");
  next()
}

router.get('/hey', display,display2,(req: Request, res: Response) => {
  res.send(' Hello !! Application works!');
});*/


