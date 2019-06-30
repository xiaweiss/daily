/**
@copyright https://juejin.im/post/5d124a12f265da1b9163a28d#heading-12
*/


// // code 1 ES6 flat 拉平方法
// // deepLength 表示需要拉平的层数
// function flatten(arr, deepLength) {
//     return arr.flat(deepLength)

// }

// var arr = [1, [2, [3, [4]], 5]]

// console.log(flatten(arr, 3))

// code 2 利用 reduce 和 concat
function flatten(arr, deepLength) {
    return arr.reduce((result, next) => {
        console.log(result)
        if (Array.isArray(next)) {
            return result.concat(flatten(next))
        }
        return result.concat(next)
    }, [])

}

var arr = [1, [2, [3, [4]], 5]]

console.log(flatten(arr))