/**
 * 统计有序矩阵中的负数
 * 难度：★★☆☆☆
 * 矩阵每行、每列都非递增，返回负数个数。
 *
 * 示例：[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-2,-3,-4]] => 8
 *
 * 思路：从右上角走，遇负数则该列剩余都是负数。
 * 时间 O(m+n)，空间 O(1)
 */

export function countNegatives(grid: number[][]): number {
  const cols = grid[0].length;
  let row = 0;
  let col = cols - 1;
  let count = 0;
  while (row < grid.length && col >= 0) {
    if (grid[row][col] < 0) {
      count += grid.length - row;
      col--;
    } else {
      row++;
    }
  }
  return count;
}

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -2, -3, -4]]));
