/**
 * 回文链表
 * 判断链表是否为回文。
 *
 * 示例：1->2->2->1 => true
 *
 * 思路：快慢指针找中点，反转后半段再比较。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList } from "@/types";

export function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let current = slow!.next;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let left: ListNode | null = head;
  let right: ListNode | null = prev;
  while (right) {
    if (left!.val !== right.val) {
      return false;
    }
    left = left!.next;
    right = right.next;
  }

  return true;
}

console.log(isPalindrome(buildList([1, 2, 2, 1])));
console.log(isPalindrome(buildList([1, 2])));
