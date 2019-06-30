/**

call 和 apply 都是改变 this 指向并立即执行函数，区别只在于传参方式不同

func.call(thisArg, arg1, arg2)
func.apply(thisArg, [arg1, arg2])

 */

Function.prototype.call = function() {
    let [thisArg, ...args] = [...arguments]
    if (!thisArg) {
        // context 为 null 或 undefined
        thisArg = typeof window === 'undefined' ? global : window
    }
    // this 的指向是当前函数 func
    thisArg.func = this
    // 执行函数
    let result = thisArg.func(...args)
    delete thisArg.func
    return result
}

Function.prototype.apply = function() {
    let [thisArg, rest] = [...arguments]
    if (!thisArg) {
        thisArg = typeof window === 'undefined' ? global : window
    }
    thisArg.func = this
    let result
    if (rest) {
        result = thisArg.func(...rest)
    } else {
        result = thisArg.func()
    }
    return result
}