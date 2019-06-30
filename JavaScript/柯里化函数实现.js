/**
@copyright https://juejin.im/post/5d124a12f265da1b9163a28d#heading-12

柯里化函数实现
*/
function curry(fn, ...args) {
    if (args.length < fn.length) {
         // 参数长度不满足时，重新柯里化函数，等待新参数
        return (...arguments) => curry(fn, ...args, ...arguments)
    }

    // 参数长度满足时，执行函数
    return fn(...args)
}

function sumFn(a, b, c) {
    return a + b + c
}

var sum = curry(sumFn)
console.log(sum(2)(3)(5))
console.log(sum(2, 3, 5))
console.log(sum(2, 3)(5))
console.log(sum(2)(3, 5))




