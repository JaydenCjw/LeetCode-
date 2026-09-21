/**
 * 按绝对值排序的链表排序
 * 难度：★★★☆☆
 * 链表已经按绝对值非降序排列，把它改成按实际值非降序。
 *
 * 示例：[0,2,-5,5,10,-10] => [-10,-5,0,2,5,10]
 *
 * 思路：负数在原链表中绝对值越来越大，也就是实际值越来越小。遇到负数就把它头插到结果前面。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function sortLinkedList(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;
  while (current) {
    if (current.val < 0) {
      prev.next = current.next;
      current.next = dummy.next;
      dummy.next = current;
      current = prev.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
}

console.log(listToArray(sortLinkedList(buildList([0, 2, -5, 5, 10, -10]))));
