/**
 * 环形链表 II
 * 难度：★★★☆☆
 * 若链表有环，返回入环的第一个节点，否则返回 null。
 *
 * 思路：快慢指针相遇后，一个从头、一个从相遇点同速走，再次相遇即入口。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList } from "@/types";

export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      let start = head;
      while (start !== slow) {
        start = start!.next;
        slow = slow!.next;
      }
      return start;
    }
  }
  return null;
}

const head = buildList([3, 2, 0, -4]);
if (head?.next) {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = head.next;
}
console.log(detectCycle(head)?.val);
