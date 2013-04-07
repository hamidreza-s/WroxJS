var tcpServer = require('net').createServer();

// error event
tcpServer.on('error', function(err) {
	console.log('server error', err.message);
});

// listening event
tcpServer.on('listening', function() {
	console.log('server start');
});

var sockets = [];

// connection event
tcpServer.on('connection', function(socket) {
	console.log('new connection');
	sockets.push(socket);
	
	// data event
	socket.on('data', function(data) {
		sockets.forEach(function(eachSocket) {
			eachSocket.write(eachSocket.remoteAddress + ':' + eachSocket.remotePort + '> ' + data);
		});
	});
});

tcpServer.listen(4001);
