/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的升序链表并返回。
 *
 * 示例：1->2->4 与 1->3->4 => 1->1->2->3->4->4
 *
 * 思路：哑节点 + 双指针逐个比较接链。
 * 时间 O(m+n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 ?? list2;
  return dummy.next;
}

console.log(
  listToArray(mergeTwoLists(buildList([1, 2, 4]), buildList([1, 3, 4]))),
);
