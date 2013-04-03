// import the exec function defined on the child_process module
var exec = require('child_process').exec;

// launch the command "cat *.js | wc -l"
exec('ps faux | grep "node"', function(err, stdout, stderr) {
	// the command exited or the launching failed
	if (err) {
		// we had an error launching the process
		console.log('child process exited with error code: ', err.code);
		return;
	}
	else {
		console.log(stdout);
	}
});
