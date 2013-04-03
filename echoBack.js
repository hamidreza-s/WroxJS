process.stdin.resume();
process.stdin.on('data', function(data){
	console.log('echo back ', data.toString());
});

