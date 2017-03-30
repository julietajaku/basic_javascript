
var http = require('http');
var module1 = require('./module1')

function onRequest(request, response){
	response.writeHead(200, {'contentType': 'text/html'});
	response.write(module1.myString);
	module1.myFunction();
	response.end();
}

http.createServer(onRequest).listen(8000);
