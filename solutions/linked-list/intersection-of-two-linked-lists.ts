/**
 * 相交链表
 * 难度：★★☆☆☆
 * 找出两个单链表相交的起始节点；不相交返回 null。
 *
 * 思路：双指针分别走完两条链表后切换，若相交必在同一节点相遇。
 * 时间 O(m+n)，空间 O(1)
 */

import { ListNode } from "@/types";

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}

const shared = new ListNode(8, new ListNode(4, new ListNode(5)));
const headA = new ListNode(4, new ListNode(1, shared));
const headB = new ListNode(5, new ListNode(6, new ListNode(1, shared)));
console.log(getIntersectionNode(headA, headB)?.val);
