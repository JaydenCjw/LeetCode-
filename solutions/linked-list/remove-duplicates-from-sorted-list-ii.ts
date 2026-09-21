/**
 * 删除排序链表中的重复元素 II
 * 难度：★★☆☆☆
 * 给定已排序链表，删除所有出现多次的元素，只保留原链表中只出现一次的数字。
 *
 * 示例：1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 => 1 -> 2 -> 5
 *
 * 思路：哑结点方便删头。若后继与再后继值相同，则整段跳过该值。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  while (prev.next) {
    if (prev.next.next && prev.next.val === prev.next.next.val) {
      const value = prev.next.val;
      while (prev.next && prev.next.val === value) {
        prev.next = prev.next.next;
      }
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
}

console.log(listToArray(deleteDuplicates(buildList([1, 2, 3, 3, 4, 4, 5]))));
