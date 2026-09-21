/**
 * 转置矩阵
 * 难度：★☆☆☆☆
 * 返回矩阵的转置：新矩阵第 i 行是原矩阵第 i 列。
 *
 * 示例：[[1,2,3],[4,5,6],[7,8,9]] => [[1,4,7],[2,5,8],[3,6,9]]
 *
 * 思路：结果的 (j,i) 取自原来的 (i,j)。
 * 时间 O(mn)，空间 O(mn)
 */

export function transpose(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: cols }, () => Array.from({ length: rows }, () => 0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      result[col][row] = matrix[row][col];
    }
  }
  return result;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
