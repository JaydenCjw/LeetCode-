/**
 * 最小体力消耗路径
 * 难度：★★★☆☆
 * 从左上走到右下，一条路径的体力是相邻高度差绝对值的最大值。求所有路径中的最小体力。
 *
 * 示例：[[1,2,2],[3,8,2],[5,3,5]] => 2
 *
 * 思路：把边权看成高度差，用小根堆 Dijkstra 最小化路径上的最大边权。
 * 时间 O(n^2 log n)，空间 O(n^2)
 */

import { Heap } from "@/heap";

export function minimumEffortPath(heights: number[][]): number {
  const rows = heights.length;
  const cols = heights[0].length;
  const dist = Array.from({ length: rows }, () => new Array<number>(cols).fill(Number.POSITIVE_INFINITY));
  const heap = new Heap<[number, number, number]>((a, b) => a[0] < b[0]);
  dist[0][0] = 0;
  heap.push([0, 0, 0]);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (heap.size > 0) {
    const current = heap.pop();
    const effort = current[0];
    const row = current[1];
    const col = current[2];
    if (effort > dist[row][col]) {
      continue;
    }
    if (row === rows - 1 && col === cols - 1) {
      return effort;
    }
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) {
        continue;
      }
      const nextEffort = Math.max(effort, Math.abs(heights[nr][nc] - heights[row][col]));
      if (nextEffort < dist[nr][nc]) {
        dist[nr][nc] = nextEffort;
        heap.push([nextEffort, nr, nc]);
      }
    }
  }
  return 0;
}

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ]),
);
