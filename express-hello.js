var express = require('express');
var app = express();
var redis = require('redis');
var client = redis.createClient();


	client.on('connect', function(){
		console.log('connected');
	})	;

app.get('/', function(request, response) {

 var blocks = ['pipis', 'nikos', 'elena'];
 response.json(blocks);
});
app.listen(3000, function(){
	console.log('Listening to 3000');
});