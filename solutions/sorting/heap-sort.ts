/**
 * 堆排序
 * 难度：★★☆☆☆
 * 用二叉堆把整数数组排成升序。
 *
 * 示例：[5,2,3,1] => [1,2,3,5]
 *
 * 思路：全部入小根堆，再依次弹出。compare 返回 true 表示 a 更优先。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function heapSort(nums: number[]): number[] {
  const heap = new Heap<number>((a, b) => a < b);
  for (const value of nums) {
    heap.push(value);
  }
  const result: number[] = [];
  while (heap.size > 0) {
    result.push(heap.pop());
  }
  return result;
}

console.log(heapSort([5, 2, 3, 1]));
