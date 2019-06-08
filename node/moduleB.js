// 调用 node 内置模块读取文件内容
var fs = require("fs");
var data = fs.readFileSync("./config.txt", "utf-8");
console.log(data); // this is config file content

// 调用其他文件模块
var g = require("./moduleA.js");
g.showName() // xiawei
g.me() // xiawei
