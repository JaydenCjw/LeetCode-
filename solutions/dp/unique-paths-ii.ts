/**
 * 不同路径 II
 * 难度：★★☆☆☆
 * 网格中有障碍（1），从左上到右下只能向右或向下，求路径数。
 *
 * 思路：到达障碍格为 0，否则等于上格加左格。
 * 时间 O(m*n)，空间 O(n)
 */

export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const cols = obstacleGrid[0].length;
  const dp = new Array<number>(cols).fill(0);
  dp[0] = 1;

  for (const row of obstacleGrid) {
    for (let col = 0; col < cols; col++) {
      if (row[col] === 1) {
        dp[col] = 0;
      } else if (col > 0) {
        dp[col] += dp[col - 1];
      }
    }
  }

  return dp[cols - 1];
}

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
