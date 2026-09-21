/**
 * 岛屿的周长
 * 难度：★★☆☆☆
 * 网格中 1 是陆地、0 是水，恰好一个岛屿且没有湖。返回岛屿周长。
 *
 * 示例：[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] => 16
 *
 * 思路：每块陆地贡献 4，每有一个相邻陆地就减 2（只统计右和下，避免重复）。
 * 时间 O(mn)，空间 O(1)
 */

export function islandPerimeter(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] !== 1) {
        continue;
      }
      perimeter += 4;
      if (row + 1 < rows && grid[row + 1][col] === 1) {
        perimeter -= 2;
      }
      if (col + 1 < cols && grid[row][col + 1] === 1) {
        perimeter -= 2;
      }
    }
  }
  return perimeter;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
