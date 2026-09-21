/**
 * 地图分析
 * 难度：★★★☆☆
 * 网格中 1 为陆地、0 为海洋。返回离陆地最远的海洋格的曼哈顿距离；没有海洋或没有陆地则返回 -1。
 *
 * 示例：[[1,0,1],[0,0,0],[1,0,1]] => 2
 *
 * 思路：从所有陆地多源 BFS，最后到达的海洋格距离最大。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function maxDistance(grid: number[][]): number {
  const n = grid.length;
  const queue: Array<[number, number, number]> = [];
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        queue.push([row, col, 0]);
      }
    }
  }
  if (queue.length === 0 || queue.length === n * n) {
    return -1;
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let answer = -1;
  let head = 0;
  while (head < queue.length) {
    const current = queue[head];
    head++;
    if (!current) {
      continue;
    }
    const [row, col, dist] = current;
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nc < 0 || nr >= n || nc >= n || grid[nr][nc] !== 0) {
        continue;
      }
      grid[nr][nc] = 1;
      answer = dist + 1;
      queue.push([nr, nc, dist + 1]);
    }
  }
  return answer;
}

console.log(
  maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]),
);
