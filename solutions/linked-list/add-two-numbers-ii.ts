/**
 * 两数相加 II
 * 难度：★★★☆☆
 * 两个链表表示非负整数，高位在前。返回它们的和，同样高位在前。
 *
 * 示例：7 -> 2 -> 4 -> 3 + 5 -> 6 -> 4 => 7 -> 8 -> 0 -> 7
 *
 * 思路：用两个栈取出低位，从低位向高位相加，结果从前往后接在新链表头。不翻转原链表。
 * 时间 O(m + n)，空间 O(m + n)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const stack1: number[] = [];
  const stack2: number[] = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let head: ListNode | null = null;
  while (stack1.length > 0 || stack2.length > 0 || carry !== 0) {
    const sum = (stack1.pop() ?? 0) + (stack2.pop() ?? 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    node.next = head;
    head = node;
  }
  return head;
}

console.log(
  listToArray(addTwoNumbers(buildList([7, 2, 4, 3]), buildList([5, 6, 4]))),
);
