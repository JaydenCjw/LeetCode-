/**
 * 水位上升的泳池中游泳
 * 难度：★★★★☆
 * t 时刻水位为 t，海拔不超过 t 的格子可以游。从左上到右下，返回必须等待的最少时间。
 *
 * 示例：[[0,2],[1,3]] => 3
 *
 * 思路：路径代价是沿途海拔的最大值，小根堆 Dijkstra 取最小的这个最大值。
 * 时间 O(n^2 log n)，空间 O(n^2)
 */

import { Heap } from "@/heap";

export function swimInWater(grid: number[][]): number {
  const n = grid.length;
  const dist = Array.from({ length: n }, () => new Array<number>(n).fill(Number.POSITIVE_INFINITY));
  const heap = new Heap<[number, number, number]>((a, b) => a[0] < b[0]);
  dist[0][0] = grid[0][0];
  heap.push([grid[0][0], 0, 0]);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (heap.size > 0) {
    const current = heap.pop();
    const time = current[0];
    const row = current[1];
    const col = current[2];
    if (time > dist[row][col]) {
      continue;
    }
    if (row === n - 1 && col === n - 1) {
      return time;
    }
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nc < 0 || nr >= n || nc >= n) {
        continue;
      }
      const nextTime = Math.max(time, grid[nr][nc]);
      if (nextTime < dist[nr][nc]) {
        dist[nr][nc] = nextTime;
        heap.push([nextTime, nr, nc]);
      }
    }
  }
  return dist[n - 1][n - 1];
}

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ]),
);
