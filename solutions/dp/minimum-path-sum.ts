/**
 * 最小路径和
 * 难度：★★☆☆☆
 * 网格每个格子有非负数，从左上到右下只能向右或向下，求路径数字和的最小值。
 *
 * 思路：dp[j] 表示到当前行第 j 列的最小和。
 * 时间 O(m*n)，空间 O(n)
 */

export function minPathSum(grid: number[][]): number {
  const cols = grid[0].length;
  const dp = new Array<number>(cols).fill(0);
  dp[0] = grid[0][0];
  for (let col = 1; col < cols; col++) {
    dp[col] = dp[col - 1] + grid[0][col];
  }

  for (let row = 1; row < grid.length; row++) {
    dp[0] += grid[row][0];
    for (let col = 1; col < cols; col++) {
      dp[col] = Math.min(dp[col], dp[col - 1]) + grid[row][col];
    }
  }

  return dp[cols - 1];
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
