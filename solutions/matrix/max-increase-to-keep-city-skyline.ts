/**
 * 保持城市天际线
 * 难度：★★☆☆☆
 * 网格高度表示建筑。天际线由每行、每列的最大值决定。在不改变任何方向天际线的前提下，返回建筑物高度最多能增加的总和。
 *
 * 示例：grid=[[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]] => 35
 *
 * 思路：格子最高只能加到 min(行最大值, 列最大值)。增加量是该上限减去当前高度。
 * 时间 O(n^2)，空间 O(n)
 */

export function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const n = grid.length;
  const rowMax = Array.from({ length: n }, () => 0);
  const colMax = Array.from({ length: n }, () => 0);
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      rowMax[row] = Math.max(rowMax[row], grid[row][col]);
      colMax[col] = Math.max(colMax[col], grid[row][col]);
    }
  }
  let increase = 0;
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      increase += Math.min(rowMax[row], colMax[col]) - grid[row][col];
    }
  }
  return increase;
}

console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ]),
);
