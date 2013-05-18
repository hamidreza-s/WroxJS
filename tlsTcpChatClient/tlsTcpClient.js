var tls = require('tls');
var fs = require('fs');
var port = 4001;
var host = '127.0.0.1';
var options = {
	key: fs.readFileSync('Keys/client_key.pem'),
	cert: fs.readFileSync('Keys/client_cert.pem')
};

process.stdin.resume();

var client = tls.connect(port, host, options, function() {
	console.log('connected');
	process.stdin.pipe(client, {end: false});
	client.pipe(process.stdout);
});
