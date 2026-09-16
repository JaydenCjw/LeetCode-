/**
 * 295. 数据流的中位数
 * 设计支持 addNum / findMedian 的数据结构，动态求中位数。
 *
 * 示例：
 * addNum(1), addNum(2), findMedian() => 1.5
 * addNum(3), findMedian() => 2
 *
 * 思路：大根堆存较小一半，小根堆存较大一半，保持平衡。
 * 时间 add O(log n)，find O(1)；空间 O(n)
 */

import { createMaxHeap, createMinHeap } from "@/heap";

export class MedianFinder {
  private readonly low = createMaxHeap<number>();
  private readonly high = createMinHeap<number>();

  addNum(num: number): void {
    this.low.push(num);
    this.high.push(this.low.pop());

    if (this.high.size > this.low.size) {
      this.low.push(this.high.pop());
    }
  }

  findMedian(): number {
    if (this.low.size > this.high.size) {
      return this.low.peek();
    }
    return (this.low.peek() + this.high.peek()) / 2;
  }
}

const finder = new MedianFinder();
finder.addNum(1);
finder.addNum(2);
console.log(finder.findMedian());
finder.addNum(3);
console.log(finder.findMedian());
