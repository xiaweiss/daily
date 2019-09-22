/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let result = ''
    let shortStr = strs[0]

    // 取到最短的字符串
    for(let n of strs) {
        if(n.length < result.length) {
            shortStr = n
        }
        shortStr
    }

    // 遍历最短字符串的每一位
    for (let i = 0; i < shortStr.length; i++) {
        // console.log(shortStr[i])
        // 将最短字符串的第 i 位，与所有字符串的第 i 位比较
        let flag = true; // 是否该位全部都匹配？
        for (let n of strs) {
            if(!flag) break; // 如果本次循环时已经不匹配了，结束循环

            flag = shortStr[i] === n[i]
        }

        // 该位全部匹配，记到结果里，否则结束，返回结果
        if (flag) {
            result += shortStr[i];
        } else {
            return result
        }
    }

    return result
};

console.log(longestCommonPrefix(["flow","floight", "flower"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

