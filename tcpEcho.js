var tcpServer = require('net').createServer(function(socket) {

	// Log for each new socket connection
	console.log('New connection');
	
	// Set encoding
	socket.setEncoding('utf8');
	
	// Say wellcome to the socket
	socket.write('Hello! Welcome to the TCP echo server.\n');

	// Set timeout
	socket.setTimeout(5000);
	socket.on('timeout', function() {
		socket.write('Idle timeout, disconnecting, bye!\n');
		socket.end();
		console.log('One cline timeouted!\n');
	});
		
	// Data event of socket
	socket.on('data', function(data) {
	
		// Log received data
		console.log('Got data: ' + data.toString());
		
		// Close socket
		if (data.trim().toLowerCase() === 'quit') {
			socket.write('Bye bye!\n');
			return socket.end();
		}
		
		// Echo back data
		socket.write(data);
	});
	
	// End event of socket
	socket.on('end', function() {
		console.log('One client connection ended!');
	});

})
.on('listening', function() {
	console.log('TCP Echo Server Starts ...');
})
.listen(4001, '127.0.0.1');
