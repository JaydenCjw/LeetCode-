/**
 * 买卖股票的最佳时机 II
 * 难度：★★☆☆☆
 * 每天可买入或卖出一股，可多次交易，求最大利润。
 *
 * 示例：[7,1,5,3,6,4] => 7
 *
 * 思路：累加所有上涨价差。
 * 时间 O(n)，空间 O(1)
 */

export function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
