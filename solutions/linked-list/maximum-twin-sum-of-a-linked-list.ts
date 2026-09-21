/**
 * 链表最大孪生和
 * 难度：★★★☆☆
 * 链表长度为偶数。结点 i 与结点 n-1-i 互为孪生，求所有孪生和的最大值。
 *
 * 示例：[5,4,2,1] => 6
 *
 * 思路：快慢指针找到中点，反转后半段，再与前半段逐对求和。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList } from "@/types";

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

export function pairSum(head: ListNode | null): number {
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
  }

  let second = reverse(slow);
  let first = head;
  let best = 0;
  while (second) {
    best = Math.max(best, (first?.val ?? 0) + second.val);
    first = first?.next ?? null;
    second = second.next;
  }
  return best;
}

console.log(pairSum(buildList([5, 4, 2, 1])));
