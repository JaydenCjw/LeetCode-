/**
 * 分隔链表
 * 难度：★★☆☆☆
 * 把所有小于 x 的节点排在大于等于 x 的节点前面，保持相对顺序。
 *
 * 示例：1->4->3->2->5->2, x = 3 => 1->2->2->4->3->5
 *
 * 思路：小链表与大链表分别串联再连接。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function partition(head: ListNode | null, x: number): ListNode | null {
  const smallDummy = new ListNode(0);
  const largeDummy = new ListNode(0);
  let small = smallDummy;
  let large = largeDummy;

  while (head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }

  large.next = null;
  small.next = largeDummy.next;
  return smallDummy.next;
}

console.log(listToArray(partition(buildList([1, 4, 3, 2, 5, 2]), 3)));
