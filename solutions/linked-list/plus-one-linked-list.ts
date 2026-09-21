/**
 * 给单链表加一
 * 难度：★★☆☆☆
 * 链表从头到尾表示一个非负整数，返回加一后的链表。
 *
 * 示例：1 -> 2 -> 3 => 1 -> 2 -> 4；9 -> 9 => 1 -> 0 -> 0
 *
 * 思路：找到最右边不是 9 的结点加一，它后面的 9 全部变成 0。若全是 9，哑结点变成新的最高位 1。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function plusOne(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let notNine: ListNode = dummy;
  let current = head;
  while (current) {
    if (current.val !== 9) {
      notNine = current;
    }
    current = current.next;
  }
  notNine.val += 1;
  current = notNine.next;
  while (current) {
    current.val = 0;
    current = current.next;
  }
  return dummy.val === 0 ? dummy.next : dummy;
}

console.log(listToArray(plusOne(buildList([1, 2, 3]))));
console.log(listToArray(plusOne(buildList([9, 9]))));
