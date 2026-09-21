/**
 * 翻倍以链表形式表示的数字
 * 难度：★★★☆☆
 * 链表从头到尾表示一个整数，返回该数乘 2 后的链表，最高位在前。
 *
 * 示例：[1,8,9] => [3,7,8]
 *
 * 思路：先反转，从低位乘 2 并处理进位，必要时补一位，再反转回来。
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

export function doubleIt(head: ListNode | null): ListNode | null {
  head = reverse(head);
  let carry = 0;
  let current = head;
  let prev: ListNode | null = null;
  while (current) {
    const sum = current.val * 2 + carry;
    current.val = sum % 10;
    carry = Math.floor(sum / 10);
    prev = current;
    current = current.next;
  }
  if (carry !== 0 && prev) {
    prev.next = new ListNode(carry);
  }
  return reverse(head);
}

console.log(listToArray(doubleIt(buildList([1, 8, 9]))));
