var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'checkout'
});

connection.connect();

let createUser =(callback)=>{
  console.log('in database save1')
  var queryStr1='Insert into user Values()'
   connection.query(queryStr1,(err,result)=>{
    if(err){
      console.log('err inside createUser '+err)
      callback(err)
    }else{
      console.log('success create user in database')
      callback(null,result)

    }
  })
}
let createF1 =(data,callback)=>{
  console.log('in database save1'+data.password)
  var queryStr2=`Insert into form1 (name, email,password,userId) Values("${data.name}","${data.email}","${data.password}", (SELECT id FROM user ORDER BY id DESC LIMIT 1))`


   connection.query(queryStr2,(err,result)=>{
     console.log(queryStr2)
    if(err){
      console.log('err inside createF1 '+err)
      callback(err)
    }else{
      console.log('success create F1 in database')
      callback(null,result)

    }
  })
}
let createF2 =(data,callback)=>{
  console.log('in database save2'+data.address)
  var queryStr2=`Insert into form2 (address, city,state,zipcode,phonenumber, userId) Values("${data.address}","${data.city}","${data.state}","${data.zipcode}","${data.phonenumber}", (SELECT id FROM user ORDER BY id DESC LIMIT 1))`


   connection.query(queryStr2,(err,result)=>{
     console.log(queryStr2)
    if(err){
      console.log('err inside createF2 '+err)
      callback(err)
    }else{
      console.log('success create F2 in database')
      callback(null,result)

    }
  })
}


let createF3 =(data,callback)=>{
  console.log('in database save3'+data.credit)
  var queryStr3=`Insert into form3 (credit, expire,cvv,billing, userId) Values("${data.credit}","${data.expire}","${data.cvv}","${data.billing}", (SELECT id FROM user ORDER BY id DESC LIMIT 1))`


   connection.query(queryStr3,(err,result)=>{
     console.log(queryStr3)
    if(err){
      console.log('err inside createF3 '+err)
      callback(err)
    }else{
      console.log('success create F3 in database')
      callback(null,result)

    }
  })
}

let display =(callback)=>{
  var queryStr4 ='Select * from form1 where userId = (SELECT id FROM user ORDER BY id DESC LIMIT 1)'+'Select * from form2 where userId = (SELECT id FROM user ORDER BY id DESC LIMIT 1)'+'Select * from form3 where userId = (SELECT id FROM user ORDER BY id DESC LIMIT 1)'

  connection.query(queryStr4,(err,result)=>{
    console.log(queryStr4)
   if(err){
     console.log('err inside createF3 '+err)
     callback(err)
   }else{
     console.log('success create F3 in database')
     callback(null,result)

   }
 })


}
module.exports={
  createUser,
  createF1,
  createF2,
  createF3
}

