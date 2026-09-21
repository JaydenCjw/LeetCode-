/**
 * 无限集中的最小数字
 * 难度：★★☆☆☆
 * 集合最初包含所有正整数。popSmallest 弹出最小数，addBack 把一个数加回去（已存在则忽略）。
 *
 * 示例：连续两次 popSmallest 得到 1、2，addBack(1) 后再 pop 得到 1，再 pop 得到 3。
 *
 * 思路：current 表示还没被弹出过的最小正整数。被加回的数放进小根堆。
 * 单次操作摊还 O(log n)
 */

import { Heap } from "@/heap";

export class SmallestInfiniteSet {
  private current = 1;
  private readonly added = new Heap<number>((a, b) => a < b);
  private readonly inHeap = new Set<number>();

  popSmallest(): number {
    if (this.added.size > 0 && this.added.peek() < this.current) {
      const value = this.added.pop();
      this.inHeap.delete(value);
      return value;
    }
    const value = this.current;
    this.current += 1;
    return value;
  }

  addBack(num: number): void {
    if (num < this.current && !this.inHeap.has(num)) {
      this.added.push(num);
      this.inHeap.add(num);
    }
  }
}

const set = new SmallestInfiniteSet();
const first = set.popSmallest();
const second = set.popSmallest();
set.addBack(1);
const third = set.popSmallest();
const fourth = set.popSmallest();
console.log([first, second, third, fourth]);
