/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        let item = nums[i]
        if (obj[item]) {
            return true;
        } else {
            obj[item] = true;
        }
    }
    return false;
};
// @lc code=end

