var spawn = require('child_process').spawn;

// Spawn the child with a "sleep 10" command
var child = spawn('sleep', ['4']);

setTimeout(function() {
	child.kill();
}, 3000);

child.on('exit', function(code, signal) {
	console.log('child process terminated with code ', code);
	console.log('child process terminated because of signal ', signal);
});
