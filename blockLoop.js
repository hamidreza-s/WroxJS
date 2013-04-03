process.nextTick(function nextTick() {
	var a = 0;
	while (true) {
		a++;
	}
});

process.nextTick(function thenTick() {
	console.log('hey');
});

