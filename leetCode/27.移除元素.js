/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0;

    let i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i;
};
// @lc code=end

const nums = [3,2,2,3], val = 3;
// const nums = [0,1,2,2,3,0,4,2], val = 2;

console.log(removeElement(nums,val))
