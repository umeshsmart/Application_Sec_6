var middleware=
{
	logger_for_aboutus:function(req,res,next)
	{
		console.log("private log for about us page !!!!");
		console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	},logger_for_team:function(req,res,next)
	{
		console.log("private log for team page !!!!");
		console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	},
	logger:function(req,res,next)
	{
		console.log("Logger for the application!!!!");
		console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	}
};

module.exports=middleware;