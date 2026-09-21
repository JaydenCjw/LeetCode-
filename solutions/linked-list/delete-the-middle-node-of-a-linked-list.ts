/**
 * 删除链表的中间节点
 * 难度：★★☆☆☆
 * 删除链表正中间的结点。长度为 n 时删除下标 floor(n / 2) 的结点（从 0 开始）。只有一个结点时返回空。
 *
 * 示例：[1,3,4,7,1,2,6] => [1,3,4,1,2,6]
 *
 * 思路：快慢指针。快指针先走两步，慢指针停在中间结点的前驱。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return null;
  }
  let slow = head;
  let fast = head.next.next;
  while (fast?.next) {
    slow = slow.next ?? slow;
    fast = fast.next.next;
  }
  slow.next = slow.next?.next ?? null;
  return head;
}

console.log(listToArray(deleteMiddle(buildList([1, 3, 4, 7, 1, 2, 6]))));
