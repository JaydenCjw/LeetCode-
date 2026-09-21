/**
 * 买卖股票的最佳时机 IV
 * 难度：★★★★☆
 * 最多完成 k 笔交易，求最大利润。
 *
 * 示例：k = 2, prices = [2,4,1] => 2；k = 2, prices = [3,2,6,5,0,3] => 7
 *
 * 思路：k 很大时退化为无限次交易；否则 buy[j]/sell[j] 表示第 j 笔买入、卖出后的最大利润。
 * 时间 O(nk)，空间 O(k)
 */

export function maxProfit(k: number, prices: number[]): number {
  const n = prices.length;
  if (n === 0 || k === 0) {
    return 0;
  }
  if (k >= Math.floor(n / 2)) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
  }

  const buy = new Array<number>(k + 1).fill(Number.NEGATIVE_INFINITY);
  const sell = new Array<number>(k + 1).fill(0);
  for (const price of prices) {
    for (let j = 1; j <= k; j++) {
      buy[j] = Math.max(buy[j], sell[j - 1] - price);
      sell[j] = Math.max(sell[j], buy[j] + price);
    }
  }
  return sell[k];
}

console.log(maxProfit(2, [2, 4, 1]));
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
