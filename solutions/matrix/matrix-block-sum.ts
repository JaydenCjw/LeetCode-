/**
 * 矩阵区域和
 * 难度：★★☆☆☆
 * 对每个格子，求以它为中心、切比雪夫距离不超过 k 的子矩阵之和（越界部分忽略）。
 *
 * 示例：mat=[[1,2,3],[4,5,6],[7,8,9]], k=1 => [[12,21,16],[27,45,33],[24,39,28]]
 *
 * 思路：二维前缀和，每个格子用四个角在 O(1) 内求子矩阵和。
 * 时间 O(mn)，空间 O(mn)
 */

export function matrixBlockSum(mat: number[][], k: number): number[][] {
  const rows = mat.length;
  const cols = mat[0].length;
  const prefix = Array.from({ length: rows + 1 }, () => Array.from({ length: cols + 1 }, () => 0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      prefix[row + 1][col + 1] =
        mat[row][col] + prefix[row][col + 1] + prefix[row + 1][col] - prefix[row][col];
    }
  }
  const answer = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const r1 = Math.max(0, row - k);
      const c1 = Math.max(0, col - k);
      const r2 = Math.min(rows - 1, row + k);
      const c2 = Math.min(cols - 1, col + k);
      answer[row][col] =
        prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
    }
  }
  return answer;
}

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1,
  ),
);
