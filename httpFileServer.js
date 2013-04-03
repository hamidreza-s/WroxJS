var 
	path = require('path'),
	fs = require('fs');

require('http').createServer(function(req, res) {
	var file = path.normalize('.' + req.url);
}).listen(4001);
