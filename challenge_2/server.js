const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("client"));





app.get('/', function(req, res) {
  res.send('Hello World!')
});
app.post('/upload_json',(req, res) => {

  console.log('requestbodydata12_____'+ req.body.data);
  var obj = req.body.data;
  var objKeys =Object.keys(JSON.parse(obj));// Json convert to obj
  console.log(objKeys);









  res.end('post')


 })


app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});


