/**
 * 反转链表
 * 难度：★☆☆☆☆
 * 反转单链表，并返回反转后的头节点。
 *
 * 示例：1->2->3->4->5 => 5->4->3->2->1
 *
 * 思路：迭代三指针 prev / current / next。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

console.log(listToArray(reverseList(buildList([1, 2, 3, 4, 5]))));
