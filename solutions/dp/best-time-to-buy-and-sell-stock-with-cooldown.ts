/**
 * 最佳买卖股票时机含冷冻期
 * 难度：★★★☆☆
 * 卖出后第二天不能买入，求最大利润。
 *
 * 示例：[1,2,3,0,2] => 3
 *
 * 思路：持有、冷冻、空仓三种状态滚动。
 * 时间 O(n)，空间 O(1)
 */

export function maxProfit(prices: number[]): number {
  let hold = -prices[0];
  let sold = 0;
  let rest = 0;
  for (let i = 1; i < prices.length; i++) {
    const previousSold = sold;
    sold = hold + prices[i];
    hold = Math.max(hold, rest - prices[i]);
    rest = Math.max(rest, previousSold);
  }
  return Math.max(sold, rest);
}

console.log(maxProfit([1, 2, 3, 0, 2]));
