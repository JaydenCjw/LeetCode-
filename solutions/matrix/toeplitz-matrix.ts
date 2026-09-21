/**
 * 托普利茨矩阵
 * 难度：★☆☆☆☆
 * 若每条左上到右下的对角线上元素都相同，则是托普利茨矩阵。
 *
 * 示例：[[1,2,3,4],[5,1,2,3],[9,5,1,2]] => true
 *
 * 思路：每个元素（除第一行第一列）都应等于左上角邻居。
 * 时间 O(mn)，空间 O(1)
 */

export function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let row = 1; row < matrix.length; row += 1) {
    for (let col = 1; col < matrix[0].length; col += 1) {
      if (matrix[row][col] !== matrix[row - 1][col - 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]),
);
