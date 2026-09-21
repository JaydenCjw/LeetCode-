/**
 * 移除链表元素
 * 难度：★☆☆☆☆
 * 删除链表中所有值等于 val 的节点。
 *
 * 示例：1->2->6->3->4->5->6, val = 6 => 1->2->3->4->5
 *
 * 思路：哑节点统一处理头节点。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let current = dummy;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}

console.log(listToArray(removeElements(buildList([1, 2, 6, 3, 4, 5, 6]), 6)));
