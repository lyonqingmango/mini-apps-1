const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const {createUser,createF1,createF2,createF3,display} =require('../database/index.js')

app.use(bodyParser.json());
app.use(express.static('public/src'));

app.get('/user/form', function (req, res) {


  display((err,data)=>{
    if(err){
      res.status(500).send('err in display server')
    }else{
      res.json(data)
    }
  })
})
app.post('/user/id', function (req, res) {

  console.log('reqbody'+req.body)
  createUser((err,result)=>{
    if(err){
      res.status(500).send('err inside create user')
    }else{
      res.status(201).json(result)
    }
  })
})
app.post('/user/form1', function (req, res) {

  console.log('reqbody'+ req.body.password)
  createF1(req.body, (err,result)=>{
    if(err){
      res.status(500).send('err inside create form 1')
    }else{
      res.status(201).send('sucess create a form 1')
    }
  })
})
app.post('/user/form2', function (req, res) {

  console.log('reqbody'+ req.body.password)
  createF2(req.body, (err,result)=>{
    if(err){
      res.status(500).send('err inside create form 2')
    }else{
      res.status(201).send('sucess create a form 2')
    }
  })
})

app.post('/user/form3', function (req, res) {

  console.log('reqbody'+ req.body.credit)
  createF3(req.body, (err,result)=>{
    if(err){
      res.status(500).send('err inside create form 3')
    }else{
      res.status(201).send('sucess create a form 3')
    }
  })
})


app.listen(3000,function(){
  console.log('connecting to3000')
})
