/**
 * 旋转图像
 * 难度：★★★☆☆
 * 将 n x n 矩阵原地顺时针旋转 90 度。
 *
 * 示例：[[1,2,3],[4,5,6],[7,8,9]] => [[7,4,1],[8,5,2],[9,6,3]]
 *
 * 思路：先转置再左右翻转。
 * 时间 O(n^2)，空间 O(1)
 */

export function rotate(matrix: number[][]): void {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

const sample = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(sample);
console.log(sample);
