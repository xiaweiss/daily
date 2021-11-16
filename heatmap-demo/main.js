import hotMap from './src/index.js'

void function () {
  document.addEventListener('DOMContentLoaded', () => {
    hotMap.init()
  })
}()

// DOMContentLoaded —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 <img> 和样式表之类的外部资源可能尚未加载完成。
// load —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。
// beforeunload/unload —— 当用户正在离开页面时。
// 每个事件都是有用的：
//
// DOMContentLoaded 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。
// load 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。
// beforeunload 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。
// unload 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。
