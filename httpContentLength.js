require('http').createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type':'text/plain',
		'Content-Length':'5'
	});
	res.write('Hello World!\n');
	res.end();
}).listen(4001);
