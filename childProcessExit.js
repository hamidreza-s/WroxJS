var spawn = require('child_process').spawn;

// Spawn the child with a "ls -la" command
var child = spawn("ls", ['-la']);

// When child speaks
child.stdout.on("data", function (data) {
	console.log('data from child: ', data.toString());
})

// When child exit
child.on("exit", function (code){
	console.log('child process terminated with code ', code);
});
