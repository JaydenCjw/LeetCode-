/**
 * 不同路径
 * m x n 网格，只能向右或向下，从左上到右下共有多少条路径。
 *
 * 示例：m = 3, n = 7 => 28
 *
 * 思路：dp[i][j] = dp[i-1][j] + dp[i][j-1]，可压缩为一维。
 * 时间 O(m*n)，空间 O(n)
 */

export function uniquePaths(m: number, n: number): number {
  const dp = new Array<number>(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[col] += dp[col - 1];
    }
  }

  return dp[n - 1];
}

console.log(uniquePaths(3, 7));
