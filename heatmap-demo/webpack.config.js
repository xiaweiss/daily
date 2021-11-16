const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: 'cheap-module-source-example-map',
  devServer: {
    contentBase: './dist/', //表示静态资源（非webpack编译产生）文件的目录位置，
    //这个目录的资源会被放到同样当成服务器根目录去
    //遇到同名文件，webpack编译后产生的文件优先级更高
    compress: true, //是否压缩
    port: 9000, //端口号
    host: '0.0.0.0', //默认是localhost，如果想被外部访问，这样设置
    historyApiFallback: true, //当使用 history 模式路由时，设置为true，404页面会被重定向到主页,
    hot: true // 热替换，可以在不刷新页面的情况下更新修改后数据，也可以配置在package.json 的 scripts 里，加 --hot参数
  }
}
