/**
 * 网格中的最短路径
 * 难度：★★★★☆
 * 从左上到右下，可以消除至多 k 个障碍（1）。返回最短路径长度，无法到达返回 -1。
 *
 * 示例：grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]，k = 1 => 6
 *
 * 思路：BFS 状态为 (行, 列, 剩余消除次数)，同一格保留剩余次数更多的访问。
 * 时间 O(m*n*k)，空间 O(m*n*k)
 */

export function shortestPath(grid: number[][], k: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const best = Array.from({ length: rows }, () => new Array<number>(cols).fill(-1));
  const queue: Array<[number, number, number, number]> = [[0, 0, k, 0]];
  best[0][0] = k;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let head = 0;

  while (head < queue.length) {
    const current = queue[head];
    head++;
    if (!current) {
      continue;
    }
    const [row, col, remain, dist] = current;
    if (row === rows - 1 && col === cols - 1) {
      return dist;
    }
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) {
        continue;
      }
      const nextRemain = remain - grid[nr][nc];
      if (nextRemain < 0 || nextRemain <= best[nr][nc]) {
        continue;
      }
      best[nr][nc] = nextRemain;
      queue.push([nr, nc, nextRemain, dist + 1]);
    }
  }
  return -1;
}

console.log(
  shortestPath(
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    1,
  ),
);
