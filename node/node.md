# 安装 node
先 安装 nvm，然后 nvm instal node版本号，然后 nvm use node版本号

# 定义函数和变量
与 web 的 javascript 相同

```javascript
// showName.js
var name = 'xiawei'
var showName = function () {
    console.log(name);
}
showName();
```

node showName.js 可以执行，结果打印出 xiawei

# 模块使用
每个文件可以认为是一个模块，使用 require 导入、export 导出

require(文件路径)
require(node内部模块名)
require(node安装好的第三方模块名)

export.变量 = 变量值
export.函数名 = 函数

示例

```javascript
// moduleA.js
function showName() {
    console.log('xiawei');
}

exports.showName = showName;
exports.me = showName;

// moduleB.js
// 调用 node 内置模块读取文件内容
var fs = require("fs");
var data = fs.readFileSync("./config.txt", "utf-8");
console.log(data); // this is config file content

// 调用其他文件模块
var g = require("./moduleA.js");
g.showName() // xiawei
g.me() // xiawei
```

注意如果不写 var ，声明的是全局变量，也就不需要导出
这时如果在 moduleD.js，不写 var 再声明一个同名的全局变量 me，则会覆盖之前的 me

```javascript
// moduleC.js
me = function() {
    console.log("xiawei");
}

// moduleD.js
var q = require("./moduleC");
me(); // xiawei

me = function() {
    console.log('other');
}
me(); // other
q.me(); // 报错
```



# 创建 node http 服务

node 服务不同于其他语言，可以直接使用与生产环境

```javascript
// createHttpServer.js
var myHttp = require("http");
var myServer = myHttp.createServer(function(requset, response){
    response.write("hello my server");
    response.write(requset.url);
    response.end();
});

myServer.listen(8080)
```

运行文件，访问 http://localhost:8080/foo，可以看到页面输出了 hello my server/foo



需要从 url 获取 query 参数时

例如访问地址 http://localhost:8080/foo?a=123&b=456

requset.url 得到完整路径 /foo?a=123&b=456
可以使用 node 内置模块 url 来处理

```javascript
// createHttpServer.js 部分代码
var myUrl = require("url");
var url = myUrl.parse(requset.url) // 将 URL 转成对象
var query = url.query // a=123&b=456，没有值返回 null

// 或者 parse 方法可以加参数 true, 会将 query 也转为对象
var url = myUrl.parse(requset.url, true); // 将 URL 转成对象
var query = url.query  // { a: '123', b: '456'}，没有值返回 null
```

# 输出 json 格式

输出 json 格式需要设置响应头

```javascript
response.writeHead(200, {'Content-Type': 'application/json'})
```

如果你什么都不设置，默认是text/html 。常见的还有 
text/css  text/plain  image/jpeg  text/xml application/octet-stream

# 读取文件

__dirname 值为当前的路径

```javascript
// readFile.js
// 同步读取文件
var data = fs.readFileSync(__dirname + "/conf.txt", "utf-8");

// 异步读取文件
fs.readFile(__dirname + "/config.txt", function(err, data) {
    response.write("file1: " + Date.now().toString() + "</br>");
})
```







