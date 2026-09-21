/**
 * 反转链表 II
 * 难度：★★★☆☆
 * 反转从位置 left 到 right 的一段（下标从 1 开始），其余不变。
 *
 * 示例：1->2->3->4->5, left = 2, right = 4 => 1->4->3->2->5
 *
 * 思路：定位 left 前驱，头插法把后续节点逐个插到段首。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev: ListNode = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next!;
  }

  const start = prev.next!;
  for (let i = 0; i < right - left; i++) {
    const next = start.next!;
    start.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}

console.log(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 2, 4)));
