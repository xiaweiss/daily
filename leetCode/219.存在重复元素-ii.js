/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (obj[item] >= 0 && i - obj[item] <= k) {
            return true
        } else {
            obj[item] = i;
        }
    }
    return false;
};
// @lc code=end

