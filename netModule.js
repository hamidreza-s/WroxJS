require('net').createServer(function(socket) {
	// new connection
	console.log('new connection');

	// data
	socket.on('data', function(data) {
		console.log('new data: ', data);
	});

	// end connection
	socket.on('end', function() {
		console.log('the end');
	});
}).on('listening', function() {
	console.log('Server is listening in port 8888');
}).listen(8888);
