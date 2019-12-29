/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var len = (m--) + (n--)
    while (n >= 0) {
        nums1[--len] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    }
};
// @lc code=end
// TODO

