/**
@copyright https://juejin.im/post/5d124a12f265da1b9163a28d#heading-12
@copyright https://time.geekbang.org/column/article/83719

this 的指向
谁调用它，就指向谁
调用函数时使用的引用，决定了函数执行时刻 this 值

this 关键字的机制
在 JavaScript 标准中，为函数规定了为函数保存定义时上下文的 [[Environment]]

当一个函数执行时，会创建一条新的执行环境的记录，记录的外层的词法环境会被设置成函数的 [[Environment]]
这个动作就是切换上下文了

关于 this，JavaScript 标准定义了 [[thisMode]] 私有属性
- lexical: 表示从上下文中找 this, 对应箭头函数
- global: 表示 this 为 undefined 时，取全局对象，对应普通函数
- strict: 严格模式时调用，this 严格按照调用时传入的值，可能为 null 或 undefined
*/

// // code 1
// function showThis() {
//     console.log(this)
// }
// var o = {
//     showThis: showThis
// }
// showThis() // global
// o.showThis() // o


// // code 2
// "use strict"
// function showThis() {
//     console.log(this)
// }
// var o = {
//     showThis: showThis
// }
// showThis() // undefined
// o.showThis() // o


// code 3  嵌套的箭头函数中的代码都指向外层 this
// var o = {}
// o.foo = function foo() {
//     console.log(this)
//     return () => {
//         console.log(this)
//         return () => console.log(this)
//     }
// }
// o.foo()()() // o o o


// code 4
function foo(a, b, c) {
    console.log(this)
    console.log(a, b, c)
}
foo.call({}, 1, 2, 3) // {} 1 2 3
foo.apply({}, [1, 2, 3]) // {} 1 2 3
foo.bind({}, 1, 2, 3)() // {} 1 2 3
// 多次 bind 只有第一次有效
foo.bind({}, 1, 2, 3).bind({ a: 1 }, 4, 5, 6)() // {} 1 2 3



