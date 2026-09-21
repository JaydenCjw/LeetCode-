/**
 * 从最富有的堆中取走礼物
 * 难度：★★☆☆☆
 * 每秒选择礼物最多的一堆，拿走留下 floor(sqrt(原数量))。重复 k 秒，返回剩余礼物总数。
 *
 * 示例：[25,64,9,4,100]，k = 4 => 29
 *
 * 思路：大根堆每次取出最大值，放回平方根的下取整。
 * 时间 O((n + k) log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function pickGifts(gifts: number[], k: number): number {
  const heap = new Heap<number>((a, b) => a > b);
  for (const gift of gifts) {
    heap.push(gift);
  }
  for (let i = 0; i < k; i += 1) {
    const top = heap.pop();
    heap.push(Math.floor(Math.sqrt(top)));
  }
  let sum = 0;
  while (heap.size > 0) {
    sum += heap.pop();
  }
  return sum;
}

console.log(pickGifts([25, 64, 9, 4, 100], 4));
