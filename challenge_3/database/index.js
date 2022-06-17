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


module.exports.createUser = createUser;
module.exports.createF1 = createF1;