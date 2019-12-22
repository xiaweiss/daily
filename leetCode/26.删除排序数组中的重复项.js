/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if(nums.length ==0){
//         return 0;
//     }
//     var i = 0;
//     for(var j=1;j<nums.length;j++){
//         if(nums[i] !== nums[j]){
//             i++;
//             nums[i]=nums[j];
//         }
//     }
//     return i+1; // 数组长度
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[len++] = nums[i]
        }
    }
    return len
};
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


