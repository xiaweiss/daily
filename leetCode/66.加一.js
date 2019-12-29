/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 思路1:转为数字 + 1，再转回数组
    // 会报错，因为有可能超过数值范围，导致结果不对

    // 思路2:直接再数组末位加 1， 然后检测元素，进位处理
    let flag = false // 是否需要增加位数补 1
    for (let i = digits.length -1; i >= 0; i--) {
        // 该位加和小于10，可以直接返出结果
        if (digits[i] + 1 < 10) {
            digits[i] += 1
            return digits
        } else {
        // 该位加和大于10，该位设置为0，下一位去加1
            digits[i] = 0
            if(i === 0) {
                flag = true
            }
        }
    }
    if(flag) {
        digits.unshift(1)
    }
    return digits;
};

// console.log(plusOne([1,2,3]))
console.log(plusOne([9]))
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
// TODO