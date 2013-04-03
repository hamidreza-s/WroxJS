var fs = require('fs');
require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'video/avi'});
	movieReadStream = fs.createReadStream('movie.avi');
	movieReadStream.pipe(res);
}).listen(4001);
