/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pair = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }
    for (let v of s) {
        if (pair[v]) {
            if(stack.pop() !== pair[v]) {
                return false
            }
        } else {
            stack.push(v)
        }
    }
    return stack.length === 0;

};
// @lc code=end

// t = '()'
// t = '()[]{}'
// t = '(]'
// t = '([)]'
// t = '{[]}'

// console.log(isValid(t))

