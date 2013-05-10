var net = require('net');
var port = 4001;
var host = 'localhost';

// Create TCP client socket
var tcpClient = net.createConnection(port, host);

// Encoding
process.stdin.setEncoding('utf8');
tcpClient.setEncoding('utf8');

// On connect
tcpClient.on('connect', function (connection) {
	console.log('Now we are connected to TCP server');
});

// On end
tcpClient.on('end', function() {
	console.log('end the connection');
});

// On error
tcpClient.on('error', function(err) {
	console.log('Error message: ' + err.message);
	console.log('Error code: ' + err.code);
});

// Resume process
process.stdin.resume();

// Pipe user input to TCP server
process.stdin.pipe(tcpClient);

/*
// Get input and write it to TCP socket
process.stdin.on('data', function(data) {
	tcpClient.write(data);
});
*/

// Pipe TCP server to console output
tcpClient.pipe(process.stdout);

/*
// On data
tcpClient.on('data', function(data) {
	console.log(data);
});
*/
