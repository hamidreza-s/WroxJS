var spawn = require('child_process').spawn;

// Spawn the child with a node process executing the plusOne application
var child = spawn('node', ['plusOne.js']);

// Call this function every 1 second (1000 miliseconds)
setInterval(function() {
	// Create a random number smaller than 10.000
	var number = Math.floor(Math.random() * 3000);
	
	// Send that number to the child process
	child.stdin.write(number + '\n');
	
	// Get the response from the child process and print it
	child.stdout.on('data', function(data){
		console.log('child replied to ' + number + ' with: ' + data);
	});
}, 1000);

// For error
child.stderr.on('data', function(data){
	process.stdout.write(data);
});
