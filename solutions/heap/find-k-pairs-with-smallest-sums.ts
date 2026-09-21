/**
 * 查找和最小的 K 对数字
 * 难度：★★★☆☆
 * nums1、nums2 均已升序。返回和最小的 k 对 (u, v)，u 来自 nums1，v 来自 nums2。
 *
 * 示例：nums1 = [1,7,11]，nums2 = [2,4,6]，k = 3 => [[1,2],[1,4],[1,6]]
 *
 * 思路：小根堆保存 (和, i, j)。先放入每个 nums1[i] 与 nums2[0] 的组合，弹出后再向右扩展 j。
 * 时间 O(k log k)，空间 O(k)
 */

import { Heap } from "@/heap";

export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const result: number[][] = [];
  if (nums1.length === 0 || nums2.length === 0 || k === 0) {
    return result;
  }
  const heap = new Heap<[number, number, number]>((a, b) => a[0] < b[0]);
  for (let i = 0; i < nums1.length && i < k; i += 1) {
    heap.push([nums1[i] + nums2[0], i, 0]);
  }
  while (heap.size > 0 && result.length < k) {
    const top = heap.pop();
    const i = top[1];
    const j = top[2];
    result.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length) {
      heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }
  return result;
}

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
