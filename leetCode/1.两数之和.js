/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            // console.log(i, j)
            // console.log(nums[i], nums[j])
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([3,2,4], 6))
