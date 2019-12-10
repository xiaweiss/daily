/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/\s+$/, '');
    console.log(s)
    for(let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            return s.length - 1 - i;
        }
    }
    return s.length;
};
// @lc code=end
lengthOfLastWord("a              ")

