/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if(obj[item]) {
            return item;
        } else {
            obj[item] = true;
        }
    }
};
// @lc code=end

