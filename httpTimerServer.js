require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	var countDown = 10;
	var interval = setInterval(function() {
		for (var i = 0; i < 100; i++) {
			res.write(Date.now() + " ");
		}
		
		res.write(countDown + '----------------------- \n');
		
		if (--countDown === 0) {
			clearInterval(interval);
			res.end();
		}
	}, 1000);
}).listen(4001);