const express=require("express");
const app=express();
console.log("hello")

app.set("view engine","ejs")

app.get('/', function(req, res){
	
	res.render('intex');
	
});

const PORT=3000;
const IP='127.0.0.1';
app.listen(PORT,IP,function(){
	console.log("Node is server is up and running");
})
//ejs
//display