/**
 * 重排链表
 * 难度：★★★☆☆
 * L0→L1→…→Ln-1→Ln 重排为 L0→Ln→L1→Ln-1→…
 *
 * 示例：1->2->3->4 => 1->4->2->3
 *
 * 思路：找中点、反转后半、交错合并。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let current = slow!.next;
  slow!.next = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let first: ListNode | null = head;
  let second: ListNode | null = prev;
  while (second) {
    const next1: ListNode | null = first!.next;
    const next2: ListNode | null = second.next;
    first!.next = second;
    second.next = next1;
    first = next1;
    second = next2;
  }
}

const list = buildList([1, 2, 3, 4]);
reorderList(list);
console.log(listToArray(list));
