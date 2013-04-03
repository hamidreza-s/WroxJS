var fs = require('fs');
var request = require('request');
require('http').createServer(function(req, res) {
	
	res.writeHead(200, {'Content-Type':'audio/mpeg'});
	request('http://iranmi4.persiangig.com/Ebi%20-%20Navazesh%20(IranMi.Com).mp3').pipe(res);
	res.end();
	//???
	
}).listen(4001);