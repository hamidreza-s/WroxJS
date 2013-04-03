var server = require('net').createServer();

server.on('connection', function(socket) {
	console.log('one client connected!');
	console.log(socket.address());
});

server.listen(4001);
