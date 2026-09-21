/**
 * 从链表中移除节点
 * 难度：★★★☆☆
 * 删除所有右侧存在严格更大值的结点。
 *
 * 示例：[5,2,13,3,8] => [13,8]
 *
 * 思路：反转后从左到右保留当前最大值，再反转回来。被删的都是右侧有更大值的结点。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

function reverse(head: ListNode | null): ListNode | null {
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

export function removeNodes(head: ListNode | null): ListNode | null {
  head = reverse(head);
  let max = Number.NEGATIVE_INFINITY;
  const dummy = new ListNode(0);
  let tail = dummy;
  let current = head;
  while (current) {
    const next = current.next;
    if (current.val >= max) {
      max = current.val;
      tail.next = current;
      tail = current;
      current.next = null;
    }
    current = next;
  }
  return reverse(dummy.next);
}

console.log(listToArray(removeNodes(buildList([5, 2, 13, 3, 8]))));
