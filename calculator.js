const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post('/',function(req,res){
  var numOne = Number(req.body.num1);
  var numTwo = Number(req.body.num2);
  var result = numOne+numTwo;
  res.send("The Result of calculation : " + result);
});



app.get("/bmicalculator",function(req,res){
  res.sendfile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator", function(req,res){
  var weightsave = parseFloat(req.body.Weight);
  var heightSave = parseFloat(req.body.height);
  var bMI=weightsave/(heightSave*heightSave);
  res.send("Your BMI is " +bMI);
});
app.listen(3000,function(){
  console.log("Server has been started: 3000");
})
