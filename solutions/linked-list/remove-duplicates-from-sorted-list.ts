/**
 * 删除排序链表中的重复元素
 * 难度：★☆☆☆☆
 * 已排序链表中删除重复节点，使每个元素只出现一次。
 *
 * 示例：1->1->2 => 1->2
 *
 * 思路：当前值等于后继则跳过后继。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;
  while (current?.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

console.log(listToArray(deleteDuplicates(buildList([1, 1, 2]))));
