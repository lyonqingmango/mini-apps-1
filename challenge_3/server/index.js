const express = require('express')
const app = express()
const path = require('path');


// app.use(express.static(__dirname + 'public'));
app.use(express.static('public/src'));
// app.use(express.static(__dirname + '/../public/src'));
// app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,function(){
  console.log('connecting to3000')
})

// challenge_3/public/src/index.html
// challenge_3/public/src/app.js