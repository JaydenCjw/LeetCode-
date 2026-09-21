/**
 * 第 K 个最小的素数分数
 * 难度：★★★☆☆
 * 升序质数数组中，分数 arr[i] / arr[j]（i < j）按值排序，返回第 k 小的分数，用 [分子, 分母] 表示。
 *
 * 示例：[1,2,3,5]，k = 3 => [2,5]
 *
 * 思路：每个分母先配最小分子。小根堆弹出当前最小分数后，把同一分母的下一个分子推进去。
 * 时间 O((n + k) log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  const n = arr.length;
  const heap = new Heap<[number, number, number]>((a, b) => a[0] < b[0]);
  for (let j = 1; j < n; j += 1) {
    heap.push([arr[0] / arr[j], 0, j]);
  }
  for (let count = 1; count < k; count += 1) {
    const top = heap.pop();
    const i = top[1];
    const j = top[2];
    if (i + 1 < j) {
      heap.push([arr[i + 1] / arr[j], i + 1, j]);
    }
  }
  const answer = heap.pop();
  return [arr[answer[1]], arr[answer[2]]];
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
