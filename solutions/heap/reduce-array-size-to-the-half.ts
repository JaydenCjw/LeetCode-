/**
 * 数组大小减半
 * 难度：★★★☆☆
 * 每次可以删掉某个值的全部出现。返回至少删掉一半元素所需的最少删除次数。
 *
 * 示例：[3,3,3,3,5,5,5,2,2,7] => 2
 *
 * 思路：统计频率，大根堆每次删掉出现最多的值，直到删除数量不少于一半。
 * 时间 O(n log m)，空间 O(m)
 */

import { Heap } from "@/heap";

export function minSetSize(arr: number[]): number {
  const frequency = new Map<number, number>();
  for (const value of arr) {
    frequency.set(value, (frequency.get(value) ?? 0) + 1);
  }
  const heap = new Heap<number>((a, b) => a > b);
  for (const count of frequency.values()) {
    heap.push(count);
  }
  let removed = 0;
  let sets = 0;
  while (removed * 2 < arr.length) {
    removed += heap.pop();
    sets += 1;
  }
  return sets;
}

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
