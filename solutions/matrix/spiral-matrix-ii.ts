/**
 * 螺旋矩阵 II
 * 难度：★★☆☆☆
 * 生成 n x n 螺旋矩阵，从 1 填到 n^2。
 *
 * 思路：按层模拟上右下左。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function generateMatrix(n: number): number[][] {
  const matrix = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let value = 1;

  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      matrix[top][col] = value++;
    }
    top++;
    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = value++;
    }
    right--;
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = value++;
      }
      bottom--;
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = value++;
      }
      left++;
    }
  }

  return matrix;
}

console.log(generateMatrix(3));
