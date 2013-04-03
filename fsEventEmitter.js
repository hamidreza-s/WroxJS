var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');
var path = '/home/hamidrezas/Node\ html/nodeOutput/';

/* --- start of defining inputChecker pesudo-class --- */
function inputChecker(name, file) {
	this.name = name;
	this.writeStream = fs.createWriteStream(path + file + '.txt',
		{'flags' : 'a',
		 'encoding' : 'utf8',
		 'mode' : 0666});
};

// "inputChecker" pseudo-class inherits from "eventEmitter"
// in PHP nomencluter we say; "inputChecker" extends "eventEmitter"
util.inherits(inputChecker, eventEmitter);

// add a method to "inputChecker" pesudo-class
inputChecker.prototype.check = function check(input) {
	var command = input.toString().trim().substr(0,3);
	if (command == 'wr:') {
		this.emit('write', input.substr(3, input.lenght));
	} else if (command == 'en:') {
		this.emit('end');
	} else {
		this.emit('echo', input);
	}
};
/* --- end of defining inputChecker pesudo-class --- */

// instatiate new object and event handling
var ic = new inputChecker('Shelley', 'output');

ic.on('write', function(data) {
this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
	console.log(this.name + ' wrote ' + data);
}); 

ic.on('end', function() {
	process.exit();
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
	ic.check(input);
});
