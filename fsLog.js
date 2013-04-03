var fs = require('fs');
function openAndWriteToSystemLog(writeBuffer, callback) {
	fs.open('./testOutput.txt', 'a', function (err,fd) {
		
		// If there is any error, pass it to callback
		if (err) { return callback(err); }
		
		function notifyError (err) {
			fs.close(fd, function() {
				callback(err);
			});
		}
		
		var bufferOffset = 0,
		    bufferLength = writeBuffer.length,
		    filePosition = null;
		
		fs.write(fd, 
			writeBuffer, 
			bufferOffset, 
			bufferLength, 
			filePosition,
			function wrote(err, written) {
				if (err) { return notifyError(err); }
				fs.close(fd, function() {
					callback(err)
				});
			});
	});
}

openAndWriteToSystemLog(
	new Buffer('writng this string.\n'),
	function done(err) {
		if (err) {
			console.log("error while opening and writing: ", err.message);
			return;
		}
		console.log('all done with no errors');
	}
);
