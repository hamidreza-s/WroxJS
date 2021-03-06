var writeStream = require('fs').createWriteStream('writeStream.txt', { 'flag':'a' });
var util = require('util');
var server = require('http').createServer();
var postData = '';
server.on('request', function(req, res) {
	req.on('data', function(data) {
		postData += data.toString();
		req.on('end', function() {
			writeStream.write(postData);
			res.writeHead(200, {'Content-Type':'text/plain'});
			res.write('Posted Data: ' + postData + '\n');
			res.end();
		});
	});
});
server.listen(4001);