/**
 * 215. 数组中的第 K 个最大元素
 * 在未排序数组中找到第 k 个最大的元素。
 *
 * 示例：nums = [3,2,1,5,6,4], k = 2 => 5
 *
 * 思路：最小堆维护大小为 k 的窗口；堆顶即第 k 大。
 * 平均时间 O(n log k)，空间 O(k)
 */

import { createMinHeap } from "@/heap";

export function findKthLargest(nums: number[], k: number): number {
  const heap = createMinHeap<number>();

  for (const num of nums) {
    heap.push(num);
    if (heap.size > k) {
      heap.pop();
    }
  }

  return heap.peek();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
