/**
 * 200. 岛屿数量
 * 给定 m x n 的二维网格，'1' 为陆地，'0' 为水，计算岛屿数量。
 * 岛屿由水平或垂直相连的陆地组成。
 *
 * 示例：
 * [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ] => 3
 *
 * 思路：DFS / BFS，每找到一块未访问陆地就计数并淹没连通块。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (row: number, col: number): void => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== "1") {
      return;
    }
    grid[row][col] = "0";
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(row, col);
      }
    }
  }

  return count;
}

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
