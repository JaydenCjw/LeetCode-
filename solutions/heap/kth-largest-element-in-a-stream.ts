/**
 * 数据流中的第 K 大元素
 * 难度：★★★☆☆
 * 设计类：构造时给定 nums 与 k，每次 add 返回当前第 k 大。
 *
 * 思路：大小为 k 的最小堆。
 * 时间 add O(log k)，空间 O(k)
 */

import { createMinHeap } from "@/heap";

export class KthLargest {
  private readonly k: number;
  private readonly heap = createMinHeap<number>();

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    this.heap.push(val);
    if (this.heap.size > this.k) {
      this.heap.pop();
    }
    return this.heap.peek();
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
