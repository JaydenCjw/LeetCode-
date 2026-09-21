/**
 * 删除链表的倒数第 N 个结点
 * 难度：★★☆☆☆
 * 给定链表头节点与整数 n，删除倒数第 n 个结点并返回头节点。
 *
 * 示例：1->2->3->4->5, n = 2 => 1->2->3->5
 *
 * 思路：快指针先走 n 步，再与慢指针同步前进，慢指针停在待删前驱。
 * 时间 O(L)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast!.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow!.next;
  }

  slow!.next = slow!.next!.next;
  return dummy.next;
}

console.log(listToArray(removeNthFromEnd(buildList([1, 2, 3, 4, 5]), 2)));
