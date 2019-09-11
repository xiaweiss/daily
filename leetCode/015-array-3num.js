// TODO: 超出时间限制
var threeSum = function(nums) {
    // 数组去重，非 0 同样的元素， 最多保留 2 个，0 可以保留 3个
    nums = nums.sort()
    const numsEasy = [];

    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] === 0 && nums[i - 3] !== 0) {
            numsEasy.push(nums[i])
        } else if (nums[i] !== nums[i - 2]) {
            numsEasy.push(nums[i])
        }
    }
    nums = numsEasy

    const result = []

    // 取出 3个数，所有的组合可能性
    for(let i = 0; i < nums.length ; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const cur = [nums[i], nums[j], nums[k]].sort()

                    // 为了去重，先转为字符串，然后看结果里是否包含要推入进去的
                    const curString = JSON.stringify(cur);
                    const resultString = JSON.stringify(result);
                    if (resultString.indexOf(curString) < 0) {
                        result.push(cur)
                    }
                }
            }
        }
    }
    return result
};

// TODO: 数组内提取任意 n 位的所有可能性

const input = [-1,0,1,2,-1,-4]
// const input = [14,4,6,-1,10,9,-8,7,-13,14,-13,-11,-8,-9,11,14,-8,-14,-13,7,-10,-15,-13,-11,-11,11,14,13,2,-14,1,-7,-2,14,-1,-15,9,7,-1,3,6,1,7,5,-1,-5,4,-2,-4,-1,-9,-7,-1,-7,-11,3,12,10,-7,-1,12,1,8,-13,1,14,9,-13,6,-7,-3,-11,2,-11,10,-14,-1,-9,0,2,5,6,3,-11,6,7,0,3,3,0,-12,-8,-13,3,-14,-5,2,10,-11,-14,-12,1,-10,5,5,7,-1,11,14,6,-10,-4,-3,8,-7,10,1,8,-1,-11,-15,-6,-12,-13,12,-11]

const output = threeSum(input)

output