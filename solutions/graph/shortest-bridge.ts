/**
 * 最短的桥
 * 难度：★★★☆☆
 * 网格中恰好两座岛（1 为陆地）。把最少数量的 0 翻成 1，使两座岛相连。
 *
 * 示例：[[0,1],[1,0]] => 1
 *
 * 思路：DFS 标记第一座岛，再多源 BFS 扩展到第二座岛，层数即桥长。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue: Array<[number, number]> = [];

  const mark = (row: number, col: number): void => {
    if (row < 0 || col < 0 || row >= n || col >= n || grid[row][col] !== 1) {
      return;
    }
    grid[row][col] = 2;
    queue.push([row, col]);
    for (const [dr, dc] of dirs) {
      mark(row + dr, col + dc);
    }
  };

  let found = false;
  for (let row = 0; row < n && !found; row++) {
    for (let col = 0; col < n && !found; col++) {
      if (grid[row][col] === 1) {
        mark(row, col);
        found = true;
      }
    }
  }

  let steps = 0;
  let head = 0;
  while (head < queue.length) {
    const end = queue.length;
    while (head < end) {
      const current = queue[head];
      head++;
      if (!current) {
        continue;
      }
      const [row, col] = current;
      for (const [dr, dc] of dirs) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr < 0 || nc < 0 || nr >= n || nc >= n || grid[nr][nc] === 2) {
          continue;
        }
        if (grid[nr][nc] === 1) {
          return steps;
        }
        grid[nr][nc] = 2;
        queue.push([nr, nc]);
      }
    }
    steps++;
  }
  return steps;
}

console.log(
  shortestBridge([
    [0, 1],
    [1, 0],
  ]),
);
