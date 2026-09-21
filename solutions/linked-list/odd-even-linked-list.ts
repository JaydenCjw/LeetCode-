/**
 * 奇偶链表
 * 难度：★★☆☆☆
 * 把奇数位置节点排在偶数位置节点前面，相对顺序不变。第一个节点为位置 1。
 *
 * 示例：1->2->3->4->5 => 1->3->5->2->4
 *
 * 思路：拆成奇偶两条链再拼接。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }
  const evenHead = head.next;
  let odd: ListNode = head;
  let even: ListNode | null = evenHead;
  while (even?.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

console.log(listToArray(oddEvenList(buildList([1, 2, 3, 4, 5]))));
