/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     if (nums.length === 0) return 0;

//     let i = 0;
//     for (var j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nums[i] = nums[j]
//             i++
//         }
//     }
//     return i;
// };
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let len = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != val) {
//             nums[len++] = nums[i]
//         }
//     }
//     return len
// }
/**
 * 数据结构：
 * 1. 原始数组
 * 2. len 输出数组的长度，运算过程中可以认为是下标
 *
 * 题解：
 * 1. 遍历原始数组，比较当前项和前一项是否一致
 * 2. 不一致时，以 len 为依据，更新原始数组。
 * 3. 遍历完成，输出结果。其中原始数组长度 len 的部分为已去重部分，剩下的是冗余数据
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length
    let foo = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            nums[i--] = nums[--len]
        }
    }
    return len
};
/**
 * 数据结构：
 * 1. 原始数组
 * 2. len 用于存输出的数组长度
 *
 * 题解：
 * 1. 遍历数组（遍历的次数等于数组的长度）
 * 2. 如果当前项和指定值重复，则把数组最后一项替换到当前项位置，len 减 1
 * 3. 将 i 的值减 1，循环中当前项继续取替换后的值；
 */