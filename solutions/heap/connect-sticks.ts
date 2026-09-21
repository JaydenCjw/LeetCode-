/**
 * 连接棒材的最小成本
 * 难度：★★★☆☆
 * 每次把两根棒材连成一根，代价是它们的长度之和。返回把所有棒材连成一根的最小代价。
 *
 * 示例：[1,8,3,5] => 30
 *
 * 思路：小根堆每次取出最短的两根连接，新棒材再放回堆中。哈夫曼合并。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function connectSticks(sticks: number[]): number {
  const heap = new Heap<number>((a, b) => a < b);
  for (const stick of sticks) {
    heap.push(stick);
  }
  let cost = 0;
  while (heap.size > 1) {
    const first = heap.pop();
    const second = heap.pop();
    const joined = first + second;
    cost += joined;
    heap.push(joined);
  }
  return cost;
}

console.log(connectSticks([1, 8, 3, 5]));
