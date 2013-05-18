var datagram = require('dgram');
var udpServer = datagram.createSocket('udp4');

udpServer.on('message', function(message, info) {
	console.log('Server got message: %s from %s:$d', 
		message,
		info.address,
		info.port
	);
	udpServer.send(message, 0, message.length, info.port, info.address);
});

udpServer.on('listening', function () {
	var address = udpServer.address();
	console.log('peer listening on: ' + address.address + ' : ' + address.port);
});

udpServer.bind(4000, '0.0.0.0');
