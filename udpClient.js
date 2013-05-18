var datagram = require('dgram');
var udpClient = datagram.createSocket('udp4');
var host = '0.0.0.0';
var port = parseInt(4000);
process.stdin.resume();
process.stdin.on('data', function(data) {
	udpClient.send(data, 0, data.length, port, host);
});
