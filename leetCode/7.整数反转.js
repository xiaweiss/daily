/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
// 转为数组，倒序后再转回来，接着判断边界
var reverse = function(x) {
    let result;
    if (x > 0) {
        result = parseInt(x.toString().split('').reverse().join(''))
    } else if (x < 0) {
        result = parseInt('-' + x.toString().split('').reverse().join(''))
    }

    if (result > -(2 ** 31) && result < 2 ** 31) {
        return result
    }
    return 0
};

console.log(reverse(12))
console.log(reverse(-12))
console.log(reverse(1534236469))

// TODO
