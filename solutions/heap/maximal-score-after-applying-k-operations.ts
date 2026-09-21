/**
 * 执行 K 次操作后的最大分数
 * 难度：★★★☆☆
 * 每次选择最大的数 x 加入分数，再把它替换成 ceil(x / 3)。重复 k 次，返回分数。
 *
 * 示例：[1,10,3,3,3]，k = 3 => 17
 *
 * 思路：大根堆维护当前最大值。
 * 时间 O((n + k) log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function maxKelements(nums: number[], k: number): number {
  const heap = new Heap<number>((a, b) => a > b);
  for (const value of nums) {
    heap.push(value);
  }
  let score = 0;
  for (let i = 0; i < k; i += 1) {
    const top = heap.pop();
    score += top;
    heap.push(Math.ceil(top / 3));
  }
  return score;
}

console.log(maxKelements([1, 10, 3, 3, 3], 3));
