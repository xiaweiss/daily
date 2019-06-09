var http = require("http");
var server = http.createServer(function(request, response) {
    // response.writeHead(200, {'Content-Type': 'text/xml'})
    // response.write("<user><userid>1</userid></user>")

    response.writeHead(200, {'Content-Type': 'application/json'})
    response.write('{"name": "xiawei"}');

    response.end();
})
server.listen(8080)