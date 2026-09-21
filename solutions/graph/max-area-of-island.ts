/**
 * 岛屿的最大面积
 * 难度：★★☆☆☆
 * 网格中 1 为陆地，返回最大岛屿面积（四方向连通）。没有岛屿返回 0。
 *
 * 思路：DFS 统计每个连通块大小。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function maxAreaOfIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (row: number, col: number): number => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== 1) {
      return 0;
    }
    grid[row][col] = 0;
    return 1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1);
  };

  let best = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      best = Math.max(best, dfs(row, col));
    }
  }
  return best;
}

console.log(maxAreaOfIsland([[0, 0, 1, 0], [0, 0, 1, 1], [0, 0, 0, 0]]));
