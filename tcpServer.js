var tcpServer = require('net').createServer();

var port = 4001;

tcpServer.on('listening', function() {
	console.log('Server is listening on port', port);
});

tcpServer.on('connection', function(socket) {
	console.log('Server has a new connection');
	socket.end();
	tcpServer.close();
});

tcpServer.on('close', function() {
	console.log('Server is now closed');
});

tcpServer.on('error', function(err) {
	console.log('Error occurred: ', err.message);
});

tcpServer.listen(port);
