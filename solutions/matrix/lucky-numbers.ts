/**
 * 矩阵中的幸运数
 * 难度：★★☆☆☆
 * 幸运数是它所在行的最小值，同时也是它所在列的最大值。返回所有幸运数。
 *
 * 示例：[[3,7,8],[9,11,13],[15,16,17]] => [15]
 *
 * 思路：先求每行最小值和每列最大值，再找出同时满足的元素。
 * 时间 O(mn)，空间 O(m+n)
 */

export function luckyNumbers(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowMin = Array.from({ length: rows }, () => Number.POSITIVE_INFINITY);
  const colMax = Array.from({ length: cols }, () => Number.NEGATIVE_INFINITY);
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      rowMin[row] = Math.min(rowMin[row], matrix[row][col]);
      colMax[col] = Math.max(colMax[col], matrix[row][col]);
    }
  }
  const result: number[] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const value = matrix[row][col];
      if (value === rowMin[row] && value === colMax[col]) {
        result.push(value);
      }
    }
  }
  return result;
}

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ]),
);
