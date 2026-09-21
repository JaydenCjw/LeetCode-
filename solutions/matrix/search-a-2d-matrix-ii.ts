/**
 * 搜索二维矩阵 II
 * 每行从左到右升序、每列从上到下升序，判断矩阵是否含 target。
 *
 * 示例：从右上角起步搜索。
 *
 * 思路：从右上角开始，太大则左移，太小则下移。
 * 时间 O(m+n)，空间 O(1)
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const value = matrix[row][col];
    if (value === target) return true;
    if (value > target) col--;
    else row++;
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
);
