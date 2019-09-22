/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x >= 0) {
        const result = x.toString().split('').reverse().join('')
        if (x == result) {
            return true
        }
    }
    return false
};

console.log(isPalindrome(0))
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

