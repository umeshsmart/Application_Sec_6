var express=require('express');
var app=express();
var port=process.env.PORT || 3000;

var middleware=require("./middleware.js");

//middleware for the each and every page
app.use(middleware.logger);


//set routing path for the pages 
app.use(express.static(__dirname+'/public'));


//about us page
app.get('/aboutus',middleware.logger_for_aboutus,function(req,res)
{
	res.send('About page!!!');
});

//team us page 
app.get('/team',middleware.logger_for_team,function(req,res)
{
	
	res.sendFile(__dirname+'/public/team.html');
});


app.listen(port,function()
{
	
	console.log("Express started at port "+port+" at "+new Date().toString());
});