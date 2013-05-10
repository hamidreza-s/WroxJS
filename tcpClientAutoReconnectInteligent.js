// Define variables
var net = require('net');
var port = 4001;
var tcpClient;
var retryInterval = 2000;
var retriedTimes = 0;
var maxRetries = 3;

// Resume standard input
process.stdin.resume();

// Create connection function
(function connect() {
	function reconnect() {
		if (retriedTimes >= maxRetries) {
			throw new Error('Max retires have been exceeded, I give up.');
		}
		retriedTimes += 1;
		console.log("reconnection attemp: " + retriedTimes);
		setTimeout(connect, retryInterval);
	}
	tcpClient = net.createConnection(port);
	tcpClient.on('connect', function() {
		retriedTimes = 0;
		console.log('Connected to server!');
	});
	tcpClient.on('error', function(err) {
		console.log('Error in connection: ', err);
	});
	tcpClient.on('close', function() {
		console.log('Connection got closed, will try to reconnect.');
		reconnect();
	});
	tcpClient.pipe(process.stdout, {end:false});
	process.stdin.pipe(tcpClient);
})();
