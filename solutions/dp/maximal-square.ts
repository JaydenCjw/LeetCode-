/**
 * 最大正方形
 * 在由 '0'/'1' 组成的二维矩阵中，找到只含 '1' 的最大正方形，返回其面积。
 *
 * 示例：
 * [["1","0","1","0","0"],
 *  ["1","0","1","1","1"],
 *  ["1","1","1","1","1"],
 *  ["1","0","0","1","0"]] => 4
 *
 * 思路：dp[i][j] 为以该格为右下角的最大边长。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function maximalSquare(matrix: string[][]): number {
  if (matrix.length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array.from({ length: rows + 1 }, () => new Array<number>(cols + 1).fill(0));
  let maxSide = 0;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide * maxSide;
}

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ]),
);
