var http = require('http');
var util = require('util');
var postData = 'foo=bar';
var options = {
	host: "localhost",
	port: 80,
	path: "/test/responsePost.php",
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

var request = http.request(options);

request.on('error', function(err) {
	console.log(err);
});

request.on('response', function(res) {
	console.log('Status: ' + res.statusCode);
	console.log('Headers: ' + util.inspect(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
		console.log('=== Body: ', chunk);
	});
});

request.write(postData);
request.end();
