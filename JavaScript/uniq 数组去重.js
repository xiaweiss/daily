/**
@copyright https://juejin.im/post/5d124a12f265da1b9163a28d#heading-12
*/

// code 1 Set
// function uniq(arr) {
//     return [...new Set(arr)]
// }
// const uniqArr = uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
// console.log(uniqArr)


// code 2 indexOf
// function uniq(arr) {
//     let result = []
//     arr.forEach(val => {
//         if (result.indexOf(val) < 1) {
//             result.push(val)
//         }
//     })
//     return result
// }
// const uniqArr = uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
// console.log(uniqArr)


// code 3 includes
// function uniq(arr) {
//     let result = []
//     arr.forEach(val => {
//         if (!result.includes(val)) {
//             result.push(val)
//         }
//     })
//     return result
// }
// const uniqArr = uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
// console.log(uniqArr)


// code 4 reduce
function uniq(arr) {
    return arr.reduce((prev, cur) => {
        return prev.includes(cur) ? prev : [...prev, cur]
    }, [])
}
const uniqArr = uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
console.log(uniqArr)

