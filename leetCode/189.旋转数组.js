/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k > nums.length) {
        k = k - nums.length;
    }
    const arr = nums.splice(-k, k)
    nums.splice(0, 0, ...arr)
    return nums
};
// @lc code=end
// r = rotate([1,2,3,4,5,6,7], 3)
// r
