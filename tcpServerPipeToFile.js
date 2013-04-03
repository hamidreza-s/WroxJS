var ws = require('fs').createWriteStream('tcpServerPipeToFile.txt', {'flags' : 'a'});

require('net').createServer(function(socket) {
	socket.pipe(ws);
}).listen(4001);
