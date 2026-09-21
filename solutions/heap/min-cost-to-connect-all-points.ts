/**
 * 连接所有点的最小费用
 * 难度：★★★☆☆
 * 两点距离是曼哈顿距离。返回把所有点连通的最小费用。
 *
 * 示例：[[0,0],[2,2],[3,10],[5,2],[7,0]] => 20
 *
 * 思路：Prim。小根堆扩展当前最小生成树到最近的未连通点。
 * 时间 O(n^2 log n)，空间 O(n^2)（堆中可能有重复边）
 */

import { Heap } from "@/heap";

export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const inTree = new Array<boolean>(n).fill(false);
  const best = new Array<number>(n).fill(Number.POSITIVE_INFINITY);
  best[0] = 0;
  const heap = new Heap<[number, number]>((a, b) => a[0] < b[0]);
  heap.push([0, 0]);
  let cost = 0;
  let connected = 0;
  while (heap.size > 0 && connected < n) {
    const top = heap.pop();
    const distance = top[0];
    const point = top[1];
    if (inTree[point]) {
      continue;
    }
    inTree[point] = true;
    cost += distance;
    connected += 1;
    for (let other = 0; other < n; other += 1) {
      if (inTree[other]) {
        continue;
      }
      const next =
        Math.abs(points[point][0] - points[other][0]) +
        Math.abs(points[point][1] - points[other][1]);
      if (next < best[other]) {
        best[other] = next;
        heap.push([next, other]);
      }
    }
  }
  return cost;
}

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ]),
);
