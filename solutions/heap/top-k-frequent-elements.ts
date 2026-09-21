/**
 * 前 K 个高频元素
 * 难度：★★★☆☆
 * 给定整数数组 nums 与整数 k，返回出现频率前 k 高的元素。
 *
 * 示例：nums = [1,1,1,2,2,3], k = 2 => [1,2]
 *
 * 思路：哈希计数 + 最小堆（频率，值），堆大小维持 k。
 * 时间 O(n log k)，空间 O(n)
 */

import { createMinHeap } from "@/heap";

export function topKFrequent(nums: number[], k: number): number[] {
  const frequency = new Map<number, number>();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const heap = createMinHeap<[number, number]>((a, b) => a[0] < b[0]);
  for (const [value, count] of frequency) {
    heap.push([count, value]);
    if (heap.size > k) {
      heap.pop();
    }
  }

  const result: number[] = [];
  while (heap.size > 0) {
    result.push(heap.pop()[1]);
  }
  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
