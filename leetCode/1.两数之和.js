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
    const indicies = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (indicies[target - num] != null) {
            return [indicies[target - num], i]
        }
        indicies[num] = i
    }
};

/**
 * 数据结构：
 * 1. 原始数组
 * 2. 对象 indicies 保存已经遍历过的数组值
 *
 * 题解：
 * 1.遍历数组
 * 2.保存已经遍历过的值
 * 3.检查 target - 数组当前值，在已遍历的对象中是否可以找到
 */

console.log(twoSum([3,2,4], 6))
