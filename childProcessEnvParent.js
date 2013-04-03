var exec = require('child_process').exec;
exec('node ./childProcessEnvChild.js', { env: {number:123} }, function(err, stdout, stderr) {
	if (err) { throw err; }
	console.log('standard output:\n', stdout);
	console.log('standard error:\n', stderr);
});
