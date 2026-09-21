/**
 * 下降路径最小和
 * 难度：★★★☆☆
 * 从第一行某个位置下降，每次走到下一行相邻列（同行下标差不超过 1），求最小路径和。
 *
 * 示例：[[2,1,3],[6,5,4],[7,8,9]] => 13
 *
 * 思路：逐行 DP，当前位置加上一行同列及左右的最小值。
 * 时间 O(n^2)，空间 O(n)
 */

export function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  let prev = matrix[0].slice();
  for (let i = 1; i < n; i++) {
    const current = new Array<number>(n).fill(0);
    for (let j = 0; j < n; j++) {
      let best = prev[j];
      if (j > 0) {
        best = Math.min(best, prev[j - 1]);
      }
      if (j + 1 < n) {
        best = Math.min(best, prev[j + 1]);
      }
      current[j] = matrix[i][j] + best;
    }
    prev = current;
  }
  return Math.min(...prev);
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ]),
);
