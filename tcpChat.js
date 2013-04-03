// Create Server
var net = require('net');
var server = net.createServer();

// Server error event
server.on('error', function(err) {
	console.log('Server error: ', err.message);
});

// Create socket array
var sockets = [];

// Server new connection
server.on('connection', function(socket) {
	console.log('Got a new connection.');
	
	// Store socket to sockets array
	sockets.push(socket);
	
	// Coming data event of socket
	socket.on('data', function(data) {
		// Print data to server console
		console.log('Got data: ', data.toString());
		
		// Print data to other sockets console
		sockets.forEach(function(otherSocket) {
			if (otherSocket !== socket) {
				otherSocket.write(data);
			}
		});
	});
	
	// Closing event of sockets
	socket.on('close', function() {
		// Print close status of a socket on server terminal
		console.log('A connection closed.');
		
		// Remove that socket from sockets array
		var index = sockets.indexOf(socket);
		sockets.splice(index, 1);
	});
});

// Server close event
server.on('close', function() {
	console.log('Server closed.');
});

// Bind server to 4001 port
server.listen(4001);
