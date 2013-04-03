// Unpause the stdin stream
process.stdin.resume();
process.stdin.on('data', function(data) {
	var number;
	try {
		// Parse the input data into a number
		number = parseInt(data.toString(), 10);
		
		// Increment by one
		number += 1;
		
		// Output the number
		process.stdout.write(number + "\n");
	} catch (err) {
		process.stderr.write(err.message + "\n");
	}
});
