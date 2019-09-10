const nums = [3, 2, 4], target = 6

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