/**
 * 环形链表
 * 难度：★★☆☆☆
 * 判断链表中是否有环。
 *
 * 思路：快慢指针，若相遇则有环。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode } from "@/types";

export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
a.next = b;
b.next = c;
c.next = d;
d.next = b;
console.log(hasCycle(a));
