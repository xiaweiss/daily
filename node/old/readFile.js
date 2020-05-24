var fs = require("fs");
var http = require("http");

var server = http.createServer(function(request, response){
    response.writeHead(200, "text/html");
    response.write("start: " + Date.now().toString() + "</br>");

    // 同步读取文件
    // var data = fs.readFileSync(__dirname + "/conf.txt")

    // 异步读取文件
    fs.readFile(__dirname + "/config.txt", function(err, data) {
        response.write("file1: " + Date.now().toString() + "</br>");
    })
    fs.readFile(__dirname + "/config.txt", function(err, data) {
        response.write("file2: " + Date.now().toString() + "</br>");
        response.end();
    });
})

server.listen(8080);

