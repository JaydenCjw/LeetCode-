/**
 * 三维形体投影面积
 * 难度：★☆☆☆☆
 * n×n 网格上堆了 grid[i][j] 个立方体。返回俯视图、正视图、侧视图的投影面积之和。
 *
 * 示例：grid=[[1,2],[3,4]] => 17
 *
 * 思路：俯视是非零格子数，正视是每列最大值之和，侧视是每行最大值之和。
 * 时间 O(n^2)，空间 O(1)
 */

export function projectionArea(grid: number[][]): number {
  const n = grid.length;
  let area = 0;
  for (let row = 0; row < n; row += 1) {
    let rowMax = 0;
    let colMax = 0;
    for (let col = 0; col < n; col += 1) {
      if (grid[row][col] > 0) {
        area += 1;
      }
      rowMax = Math.max(rowMax, grid[row][col]);
      colMax = Math.max(colMax, grid[col][row]);
    }
    area += rowMax + colMax;
  }
  return area;
}

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ]),
);
