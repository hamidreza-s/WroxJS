// Define variables
var net = require('net');
var port = 4001;
var tcpClient;

// Resume standard input
process.stdin.resume();

// Create connection function
(function connect() {
	tcpClient = net.createConnection(port);
	tcpClient.on('connect', function() {
		console.log('Connected to server!');
	});
	tcpClient.on('error', function(err) {
		console.log('Error in connection: ', err);
	});
	tcpClient.on('close', function() {
		console.log('Connection got closed, will try to reconnect.');
		connect();
	});
	tcpClient.pipe(process.stdout, {end:false});
	process.stdin.pipe(tcpClient);
})();
