var util = require('util');
var server = require('http').createServer();
var postData = '';
server.on('request', function(req, res) {
	res.setHeader('foo', 'bar');
	res.writeHead(200, {
		'Content-Type':'text/plain',
		'Cache-Control':'max-age=3600'
	});
	res.write('World says hello to ' + req.socket.remoteAddress + ':' + req.socket.remotePort + '\n');
	res.write('Requested URL: ' + req.url + '\n');
	res.write('Requested Method: ' + req.method + '\n');
	res.write('Requested Headers: \n' + util.inspect(req.headers) + '\n');
	res.end();
});
server.listen(4001);