/**
 * 前 K 个高频单词
 * 返回出现频率前 k 高的单词；频率相同则按字典序升序。
 *
 * 示例：words = ["i","love","leetcode","i","love","coding"], k = 2 => ["i","love"]
 *
 * 思路：计数 + 最小堆（频率升序，同频字典序降序便于弹出）。
 * 时间 O(n log k)，空间 O(n)
 */

import { createMinHeap } from "@/heap";

export function topKFrequent(words: string[], k: number): string[] {
  const frequency = new Map<string, number>();
  for (const word of words) {
    frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  const heap = createMinHeap<[string, number]>((a, b) => {
    if (a[1] !== b[1]) return a[1] < b[1];
    return a[0] > b[0];
  });

  for (const [word, count] of frequency) {
    heap.push([word, count]);
    if (heap.size > k) heap.pop();
  }

  const result: string[] = [];
  while (heap.size > 0) {
    result.push(heap.pop()[0]);
  }
  return result.reverse();
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
