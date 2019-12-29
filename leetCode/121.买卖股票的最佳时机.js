/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let base = prices[0]
    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - base;
        if (profit > max) {
            max = profit;
        } else if (profit < 0) {
            base = prices[i]
        }
    }
    return max
};
// @lc code=end
maxProfit([2,4,1])

