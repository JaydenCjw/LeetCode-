/**
 * 买卖股票的最佳时机含手续费
 * 难度：★★★☆☆
 * 可无限次买卖，每卖出一次付手续费 fee。求最大利润。
 *
 * 示例：prices = [1,3,2,8,4,9], fee = 2 => 8
 *
 * 思路：cash 为空仓利润，hold 为持仓利润，卖出时扣 fee。
 * 时间 O(n)，空间 O(1)
 */

export function maxProfit(prices: number[], fee: number): number {
  let cash = 0;
  let hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
