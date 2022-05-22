const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}));
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("client"));

var convertToCSV = (obj) => {
  var text=''
   var keys =Object.keys(obj);
   keys.pop();
   text+= keys.join();
   text+= "\n";
   console.log(text)

   var helper = function (obj){
     for(var key in obj){
       if(key!=='children'){
         text+=obj[key];
         text+=','
       }else{
         text=text.slice(0,-1);
         text+='\n'
         if(obj.children.length!==0){
           for(let i=0;i<obj.children.length;i++){
               helper(obj.children[i]);
           }
           return text
         }else{
           return text;
         }
       }
     }
     return text;
   }
   text =helper(obj);
   return text

  //  console.log('text==='+helper(obj))
 }



app.get('/', function(req, res) {
  res.send('Hello World!')
});
app.post('/upload_json',(req, res) => {

  console.log('requestbodydata12_____'+ req.body.data);
  var obj = JSON.parse(req.body.data);
  var result = convertToCSV(obj)
  console.log(result);
  res.send(result);
 })


app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});


