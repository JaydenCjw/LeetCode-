/**
 * 完全平方数
 * 返回和为 n 的完全平方数的最少数量。
 *
 * 示例：n = 12 => 3（4+4+4）；n = 13 => 2（4+9）
 *
 * 思路：完全背包 DP，物品为 1^2..floor(sqrt(n))^2。
 * 时间 O(n * sqrt(n))，空间 O(n)
 */

export function numSquares(n: number): number {
  const dp = new Array<number>(n + 1).fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let root = 1; root * root <= i; root++) {
      dp[i] = Math.min(dp[i], dp[i - root * root] + 1);
    }
  }

  return dp[n];
}

console.log(numSquares(12));
console.log(numSquares(13));
