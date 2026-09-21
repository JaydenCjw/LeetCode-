/**
 * 三角形最小路径和
 * 难度：★★★☆☆
 * 三角形每层只能走到下一层相邻位置，求自顶向下的最小路径和。
 *
 * 示例：[[2],[3,4],[6,5,7],[4,1,8,3]] => 11
 *
 * 思路：自底向上，每个位置加上较小的下方相邻值。
 * 时间 O(n^2)，空间 O(n)
 */

export function minimumTotal(triangle: number[][]): number {
  const dp = [...triangle[triangle.length - 1]];
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }
  return dp[0];
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
