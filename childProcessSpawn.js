// Import the spawn function defined on child_process module
var spawn = require('child_process').spawn;

// Launch a child process with a "tail -f /var/log/nginx/access.log" command
var child = spawn('tail', ['-f', '/var/log/nginx/access.log']);

// Print child output to the console
child.stdout.on('data', function(data){
	console.log('tail output: ' + data);
});
