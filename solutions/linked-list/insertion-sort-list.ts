/**
 * 对链表进行插入排序
 * 难度：★★★☆☆
 * 对链表做插入排序，返回升序链表。
 *
 * 示例：4 -> 2 -> 1 -> 3 => 1 -> 2 -> 3 -> 4
 *
 * 思路：维护一条有序链，逐个把原结点插到合适位置。
 * 时间 O(n^2)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function insertionSortList(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = head;
  while (current) {
    const next = current.next;
    let prev = dummy;
    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }
    current.next = prev.next;
    prev.next = current;
    current = next;
  }
  return dummy.next;
}

console.log(listToArray(insertionSortList(buildList([4, 2, 1, 3]))));
