var env = process.env,
			varName,
			envCopy = {},
			exec = require('child_process').exec;
			
// Copy process.env into envCopy
for (varName in env)
{
	envCopy[varName] = env[varName];
}

// Assign some custome variables
envCopy['foo'] = 'foo value';
envCopy['bar'] = 'bar value';

// Execute some command with process.env and my custom variables
exec('ls', { env: envCopy }, function(err, stdout, stderr) {
	if (err) { throw err; }
	console.log('stdout: ', stdout);
	console.log('stderr: ', stderr);
});
