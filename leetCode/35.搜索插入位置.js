/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0 || target < nums[0]) {
        return 0
    }
    if(target > nums[nums.length - 1]) {
        return nums.length;
    }

    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i
        }
        if (target > nums[i - i] && target < nums[i]) {
            return i
        }
    }
};
// @lc code=end

