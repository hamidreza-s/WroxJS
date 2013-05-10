var http = require('http');
var util = require('util');
var options = {
	host: "localhost",
	port: 80,
	path: "/test/phpinfo.php"
};

var request = http.get(options);

request.on('response', function(res) {
	console.log('Status: ' + res.statusCode);
	console.log('Headers: ' + util.inspect(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('Body: ', chunk);
	});
});

request.end();
