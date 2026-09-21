/**
 * 买卖股票的最佳时机 III
 * 难度：★★★★☆
 * 最多完成两笔交易，求最大利润。
 *
 * 示例：[3,3,5,0,0,3,1,4] => 6
 *
 * 思路：四状态：第一次买入/卖出、第二次买入/卖出。
 * 时间 O(n)，空间 O(1)
 */

export function maxProfit(prices: number[]): number {
  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;
  for (let i = 1; i < prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
