enpconst express=require("express");
const app=express();
console.log("hello")

app.set("view engine","ejs")

app.get('/', function(req, res){
	
	res.render('intex');
	
});

const PORT=process.enp.port;
const IP=process.enp.ip';
app.listen(PORT,IP,function(){
	console.log("Node is server is up and running");
})
//ejs
//display
