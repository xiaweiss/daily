/**
@copyright https://juejin.im/post/5d124a12f265da1b9163a28d#heading-12

new 的实现原理

1. 创建一个空对象，构造函数中的 this 指向这个对象
2. 这个新对象执行[[原型]]链接
3. 执行构造函数方法，属性和方法被添加到 this 引用的对象中
4. 如果构造函数中没有返回其他对象，那么返回 this，即这个新创建的对象；否则，返回构造函数中返回的对象

 */

function _new() {
    let target = {} // 创建的新对象
    let [constructor, ...args] = [...arguments]
    // 执行[[原型]]连接，target 是 constructor 的实例
    target.__proto__ = constructor.prototype
    // 执行构造函数，将属性和方法添加到创建的空对象上
    let result = constructor.apply(target, args)
    if (result && (typeof result === 'object' || typeof result === 'function')) {
        // 如果构造函数执行结果是对象，返回这个对象
        return result
    }
    // 否则返回新创建的对象
    return target
}