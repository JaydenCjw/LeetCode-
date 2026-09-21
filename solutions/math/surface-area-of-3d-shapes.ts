/**
 * 三维形体的表面积
 * 难度：★★☆☆☆
 * n×n 网格上第 (i,j) 格叠了 grid[i][j] 个单位立方体。返回这个形体的表面积。
 *
 * 示例：[[1,2],[3,4]] => 34
 *
 * 思路：每个高度 v 的柱子贡献 4v+2，再减去与右、下相邻柱子贴合的 2*min。
 * 时间 O(n^2)，空间 O(1)
 */

export function surfaceArea(grid: number[][]): number {
  const n = grid.length;
  let area = 0;
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      const height = grid[row][col];
      if (height > 0) {
        area += 4 * height + 2;
      }
      if (col + 1 < n) {
        area -= 2 * Math.min(height, grid[row][col + 1]);
      }
      if (row + 1 < n) {
        area -= 2 * Math.min(height, grid[row + 1][col]);
      }
    }
  }
  return area;
}

console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ]),
);
