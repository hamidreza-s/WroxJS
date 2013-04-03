var fs = require('fs');
var rs = fs.createReadStream('/home/hamidrezas/Node\ html/nodeTest/readTest.txt', {encoding: 'utf8'});
rs.on('data', function (data) {
	console.log(data);
});
