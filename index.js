var http = require("http");
var circle = require("./circleModule");
var cached1 = require("./cachedModule");
var cached2 = require("./cachedModule");

var circleArea = circle.area(2);

function onRequest(request, response) {
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Circle area with 2  radius is: " + circleArea);
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
