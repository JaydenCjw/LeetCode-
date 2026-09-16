/**
 * 121. 买卖股票的最佳时机
 * 给定股票每天价格，只能买入一次再卖出一次，求最大利润。不能卖出则返回 0。
 *
 * 示例：prices = [7,1,5,3,6,4] => 5
 *
 * 思路：遍历时维护历史最低价，并计算当前卖出的最大收益。
 * 时间 O(n)，空间 O(1)
 */

export function maxProfit(prices: number[]): number {
  let minPrice = Number.POSITIVE_INFINITY;
  let maxProfitValue = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfitValue = Math.max(maxProfitValue, price - minPrice);
  }

  return maxProfitValue;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
