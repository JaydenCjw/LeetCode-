/**
 * 旋转链表
 * 难度：★★☆☆☆
 * 将链表每个节点向右移动 k 个位置。
 *
 * 示例：1->2->3->4->5, k = 2 => 4->5->1->2->3
 *
 * 思路：成环后走 n - k%n 步断开。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head?.next || k === 0) {
    return head;
  }

  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  const steps = length - (k % length);
  if (steps === length) {
    return head;
  }

  tail.next = head;
  let newTail = head;
  for (let i = 1; i < steps; i++) {
    newTail = newTail.next!;
  }
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
}

console.log(listToArray(rotateRight(buildList([1, 2, 3, 4, 5]), 2)));
