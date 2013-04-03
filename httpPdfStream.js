var fs = require('fs');
require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'application/pdf'});
	movieReadStream = fs.createReadStream('c.pdf');
	movieReadStream.pipe(res);
}).listen(4001);
