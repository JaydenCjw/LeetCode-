/**
 * 最接近原点的 K 个点
 * 难度：★★☆☆☆
 * 平面上若干点，返回距离原点最近的 k 个点。距离为 x^2+y^2。
 *
 * 思路：大根堆维护当前最近的 k 个点。
 * 时间 O(n log k)，空间 O(k)
 */

import { Heap } from "@/heap";

export function kClosest(points: number[][], k: number): number[][] {
  const heap = new Heap<number[]>((a, b) => a[0] > b[0]);
  for (const point of points) {
    const distance = point[0] * point[0] + point[1] * point[1];
    heap.push([distance, point[0], point[1]]);
    if (heap.size > k) {
      heap.pop();
    }
  }
  const result: number[][] = [];
  while (heap.size > 0) {
    const [, x, y] = heap.pop();
    result.push([x, y]);
  }
  return result;
}

console.log(kClosest([[1, 3], [-2, 2]], 1));
