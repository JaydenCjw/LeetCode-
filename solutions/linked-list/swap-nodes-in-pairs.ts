/**
 * 两两交换链表中的节点
 * 难度：★★★☆☆
 * 两两交换相邻节点，返回交换后的链表头。不能只改值，要改节点。
 *
 * 示例：1->2->3->4 => 2->1->4->3
 *
 * 思路：哑节点 + 迭代交换相邻一对。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = first.next!;

    first.next = second.next;
    second.next = first;
    prev.next = second;
    prev = first;
  }

  return dummy.next;
}

console.log(listToArray(swapPairs(buildList([1, 2, 3, 4]))));
