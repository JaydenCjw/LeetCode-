/**
 * 有序矩阵中第 K 小的元素
 * 难度：★★★☆☆
 * n x n 矩阵每行每列递增，返回第 k 小的元素。
 *
 * 思路：二分值域，统计小于等于 mid 的个数。
 * 时间 O(n log(max-min))，空间 O(1)
 */

export function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  const countNotGreater = (target: number): number => {
    let count = 0;
    let row = n - 1;
    let col = 0;
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= target) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countNotGreater(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8));
