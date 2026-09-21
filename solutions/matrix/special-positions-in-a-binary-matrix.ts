/**
 * 二进制矩阵中的特殊位置
 * 难度：★★☆☆☆
 * 特殊位置是值为 1，且该行、该列的其他位置都是 0。返回特殊位置的个数。
 *
 * 示例：mat=[[1,0,0],[0,0,1],[1,0,0]] => 1
 *
 * 思路：统计每行、每列的 1 的个数。值为 1 且行列计数都是 1 即特殊位置。
 * 时间 O(mn)，空间 O(m+n)
 */

export function numSpecial(mat: number[][]): number {
  const rows = mat.length;
  const cols = mat[0].length;
  const rowSum = Array.from({ length: rows }, () => 0);
  const colSum = Array.from({ length: cols }, () => 0);
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      rowSum[row] += mat[row][col];
      colSum[col] += mat[row][col];
    }
  }
  let special = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (mat[row][col] === 1 && rowSum[row] === 1 && colSum[col] === 1) {
        special += 1;
      }
    }
  }
  return special;
}

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]),
);
