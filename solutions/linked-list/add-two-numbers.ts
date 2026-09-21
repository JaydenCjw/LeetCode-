/**
 * 两数相加
 * 两个非空链表表示非负整数，各位逆序存储，返回相加结果链表。
 *
 * 示例：(2 -> 4 -> 3) + (5 -> 6 -> 4) => 7 -> 0 -> 8（342 + 465 = 807）
 *
 * 思路：模拟竖式加法，逐位求和并处理进位。
 * 时间 O(max(m,n))，空间 O(1)（不计输出链表）
 */

import { ListNode, buildList, listToArray } from "@/types";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry !== 0) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}

console.log(listToArray(addTwoNumbers(buildList([2, 4, 3]), buildList([5, 6, 4]))));
