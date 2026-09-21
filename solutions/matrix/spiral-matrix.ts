/**
 * 螺旋矩阵
 * 按顺时针螺旋顺序返回矩阵中的所有元素。
 *
 * 示例：[[1,2,3],[4,5,6],[7,8,9]] => [1,2,3,6,9,8,7,4,5]
 *
 * 思路：四边界收缩模拟。
 * 时间 O(m*n)，空间 O(1)（不计输出）
 */

export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) result.push(matrix[top][col]);
    top++;
    for (let row = top; row <= bottom; row++) result.push(matrix[row][right]);
    right--;
    if (top <= bottom) {
      for (let col = right; col >= left; col--) result.push(matrix[bottom][col]);
      bottom--;
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row--) result.push(matrix[row][left]);
      left++;
    }
  }

  return result;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
