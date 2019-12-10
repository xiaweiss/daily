/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length ==0){
        return 0;
    }
    var i = 0;
    for(var j=1;j<nums.length;j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1; // 数组长度
};
// @lc code=end
// let a = [1,1,2]
// let a = [0,0,1,1,1,2,2,3,3,4]

// console.log(removeDuplicates(a))
// console.log(a)


