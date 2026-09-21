/**
 * 不同路径 III
 * 难度：★★★★☆
 * 从 1 走到 2，每次上下左右一格，必须经过所有空地 0，不能踩障碍 -1。求路径数。
 *
 * 示例：[[1,0,0,0],[0,0,0,0],[0,0,2,-1]] => 2
 *
 * 思路：DFS 走过的格子临时标成障碍，剩余非障碍格走完才算到达终点。
 * 时间 O(3^{mn})，空间 O(mn)
 */

export function uniquePathsIII(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let remain = 0;
  let startRow = 0;
  let startCol = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0 || grid[r][c] === 1) {
        remain++;
      }
      if (grid[r][c] === 1) {
        startRow = r;
        startCol = c;
      }
    }
  }

  function dfs(r: number, c: number, left: number): number {
    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] === -1) {
      return 0;
    }
    if (grid[r][c] === 2) {
      return left === 0 ? 1 : 0;
    }
    const saved = grid[r][c];
    grid[r][c] = -1;
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let count = 0;
    for (const [dr, dc] of dirs) {
      count += dfs(r + dr, c + dc, left - 1);
    }
    grid[r][c] = saved;
    return count;
  }

  return dfs(startRow, startCol, remain);
}

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ]),
);
