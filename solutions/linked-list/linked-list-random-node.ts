/**
 * 链表随机节点
 * 难度：★★☆☆☆
 * 链表长度未知，getRandom 应等概率返回其中一个结点的值。
 *
 * 示例：head = 1 -> 2 -> 3，getRandom 返回 1、2、3 之一。
 *
 * 思路：水库抽样。走到第 i 个结点时以 1/i 的概率替换当前答案，每个结点最终概率都是 1/n。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList } from "@/types";

export class Solution {
  private readonly head: ListNode | null;

  constructor(head: ListNode | null) {
    this.head = head;
  }

  /** 每个结点被选中的概率相同 */
  getRandom(): number {
    let result = 0;
    let current = this.head;
    let index = 1;
    while (current) {
      if (Math.floor(Math.random() * index) === 0) {
        result = current.val;
      }
      current = current.next;
      index += 1;
    }
    return result;
  }
}

const picker = new Solution(buildList([1, 2, 3]));
const picked = picker.getRandom();
console.log(picked);
