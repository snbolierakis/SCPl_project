var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200);
	res.write("Hello I am pipis");
	res.end();
}).listen(8080, function(){
	console.log('Listening to 8080');
});