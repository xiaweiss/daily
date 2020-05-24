var myHttp = require("http");
var myServer = myHttp.createServer(function(requset, response){
    response.write("hello my server");
    response.write(requset.url);

    var myUrl = require("url");
    // var url = myUrl.parse(requset.url); // 将 URL 转成对象
    // var query = url.query  // a=123&b=456，没有值返回 null

    // 或者 parse 方法可以加参数 true, 会将 query 也转为对象
    var url = myUrl.parse(requset.url, true); // 将 URL 转成对象
    var query = url.query  // { a: '123', b: '456'}，没有值返回 null
    console.log(query)

    response.end();
});

myServer.listen(8080)