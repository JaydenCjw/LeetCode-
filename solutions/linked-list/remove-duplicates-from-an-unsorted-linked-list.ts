/**
 * 从未排序链表中删除重复结点
 * 难度：★★☆☆☆
 * 删除所有出现次数大于 1 的值，只保留全链表中只出现一次的结点，相对顺序不变。
 *
 * 示例：[1,2,3,2] => [1,3]
 *
 * 思路：先统计频率，再滤掉出现超过一次的值。
 * 时间 O(n)，空间 O(n)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function deleteDuplicatesUnsorted(head: ListNode | null): ListNode | null {
  const frequency = new Map<number, number>();
  let current = head;
  while (current) {
    frequency.set(current.val, (frequency.get(current.val) ?? 0) + 1);
    current = current.next;
  }

  const dummy = new ListNode(0, head);
  let prev = dummy;
  current = head;
  while (current) {
    if ((frequency.get(current.val) ?? 0) > 1) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummy.next;
}

console.log(listToArray(deleteDuplicatesUnsorted(buildList([1, 2, 3, 2]))));
