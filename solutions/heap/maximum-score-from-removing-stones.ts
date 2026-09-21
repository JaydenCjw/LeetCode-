/**
 * 移除石子的最大得分
 * 难度：★★★☆☆
 * 三堆石子数量为 a、b、c。每次从两堆各取一颗得 1 分，直到至少有两堆为空。返回最大得分。
 *
 * 示例：a = 2，b = 4，c = 6 => 6
 *
 * 思路：大根堆每次取最大的两堆各减一。得分不会超过总数的一半，也不会超过总数减去最大堆。
 * 时间 O((a + b + c) log 3)，空间 O(1)
 */

import { Heap } from "@/heap";

export function maximumScore(a: number, b: number, c: number): number {
  const heap = new Heap<number>((left, right) => left > right);
  heap.push(a);
  heap.push(b);
  heap.push(c);
  let score = 0;
  while (heap.size >= 2) {
    const first = heap.pop();
    const second = heap.pop();
    if (second === 0) {
      break;
    }
    score += 1;
    if (first - 1 > 0) {
      heap.push(first - 1);
    }
    if (second - 1 > 0) {
      heap.push(second - 1);
    }
  }
  return score;
}

console.log(maximumScore(2, 4, 6));
