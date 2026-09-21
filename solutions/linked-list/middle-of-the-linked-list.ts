/**
 * 链表的中间结点
 * 难度：★☆☆☆☆
 * 给定非空单链表，返回中间结点；偶数个时返回第二个中间结点。
 *
 * 示例：1->2->3->4->5 => 3；1->2->3->4->5->6 => 4
 *
 * 思路：快慢指针。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

console.log(listToArray(middleNode(buildList([1, 2, 3, 4, 5]))));
console.log(listToArray(middleNode(buildList([1, 2, 3, 4, 5, 6]))));
