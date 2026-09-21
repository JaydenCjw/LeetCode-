/**
 * 最后一块石头的重量
 * 难度：★☆☆☆☆
 * 每次选最重的两块相撞：相等则都消失，否则较重的变成差值。返回最后剩下的重量。
 *
 * 思路：大根堆反复取出两个最大值。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function lastStoneWeight(stones: number[]): number {
  const heap = new Heap<number>((a, b) => a > b);
  for (const stone of stones) {
    heap.push(stone);
  }
  while (heap.size > 1) {
    const first = heap.pop();
    const second = heap.pop();
    if (first !== second) {
      heap.push(first - second);
    }
  }
  return heap.size === 0 ? 0 : heap.peek();
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
