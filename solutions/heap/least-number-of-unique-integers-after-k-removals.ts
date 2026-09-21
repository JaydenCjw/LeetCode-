/**
 * 移除 K 个元素后不同整数的最少数目
 * 难度：★★★☆☆
 * 可以删除数组中至多 k 个元素。返回剩余数组里不同整数个数的最小值。
 *
 * 示例：[5,5,4]，k = 1 => 1
 *
 * 思路：统计频率，小根堆优先删掉出现次数最少的整数，能整段删掉才减少一种整数。
 * 时间 O(n log m)，空间 O(m)
 */

import { Heap } from "@/heap";

export function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const frequency = new Map<number, number>();
  for (const value of arr) {
    frequency.set(value, (frequency.get(value) ?? 0) + 1);
  }
  const heap = new Heap<number>((a, b) => a < b);
  for (const count of frequency.values()) {
    heap.push(count);
  }
  let unique = frequency.size;
  let remain = k;
  while (heap.size > 0 && remain >= heap.peek()) {
    remain -= heap.pop();
    unique -= 1;
  }
  return unique;
}

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
