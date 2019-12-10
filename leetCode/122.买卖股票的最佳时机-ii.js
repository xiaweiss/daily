/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    prices.forEach((item, index) => {
        if(prices[index] > prices[index - 1]) {
            result += prices[index] - prices[index - 1];
        }
    })
    return result;
};
// @lc code=end

