/**
 * 322. 零钱兑换
 * 给定不同面额 coins 与金额 amount，求凑成该金额所需最少硬币数；无解返回 -1。
 *
 * 示例：coins = [1,2,5], amount = 11 => 3（5+5+1）
 *
 * 思路：完全背包 DP，dp[x] 表示凑成 x 的最少硬币数。
 * 时间 O(amount * coins.length)，空间 O(amount)
 */

export function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let value = 1; value <= amount; value++) {
    for (const coin of coins) {
      if (coin <= value) {
        dp[value] = Math.min(dp[value], dp[value - coin] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11));
