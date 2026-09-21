/**
 * 零钱兑换 II
 * 难度：★★★☆☆
 * 给定硬币面额，求凑成金额 amount 的组合数（顺序不同视为同一组合）。
 *
 * 示例：amount = 5, coins = [1,2,5] => 4
 *
 * 思路：完全背包，外层硬币、内层金额，避免排列重复计数。
 * 时间 O(amount * n)，空间 O(amount)
 */

export function change(amount: number, coins: number[]): number {
  const dp = new Array<number>(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let sum = coin; sum <= amount; sum++) {
      dp[sum] += dp[sum - coin];
    }
  }
  return dp[amount];
}

console.log(change(5, [1, 2, 5]));
