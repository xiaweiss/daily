/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(numRows) {
    numRows = numRows + 1
    let result = [];
    if(numRows >= 1) { result.push([1]) }
    if(numRows >= 2) { result.push([1, 1]) }
    if(numRows >= 3) {
        for (var j = 3; j <= numRows; j++) {
            let current = [];
            for(var i = 0; i < j; i++) {
                i
                if(i === 0 || i === j - 1) {
                    current[i] = 1;
                } else {
                    current[i] = result[j-2][i-1] + result[j-2][i];
                }
            }
            result.push(current);
        }
    }
    console.log(result[numRows - 1])
    return result[numRows - 1];
};
// @lc code=end
getRow(3)

