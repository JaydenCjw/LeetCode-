/**
 * 搜索二维矩阵
 * m x n 矩阵每行升序，且每行第一个数大于上一行最后一个数。判断 target 是否存在。
 *
 * 示例：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 => true
 *
 * 思路：把二维当成一维做二分。
 * 时间 O(log(m*n))，空间 O(1)
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const value = matrix[Math.floor(mid / cols)][mid % cols];
    if (value === target) {
      return true;
    }
    if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
