/**
 * K 个一组翻转链表
 * 难度：★★★★☆
 * 每 k 个节点一组翻转；不足 k 个保持原顺序。
 *
 * 示例：1->2->3->4->5, k = 2 => 2->1->4->3->5
 *
 * 思路：先数满 k 个再翻转该段，迭代拼接。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    let node: ListNode | null = groupPrev;
    for (let i = 0; i < k; i++) {
      node = node.next;
      if (!node) {
        return dummy.next;
      }
    }

    const groupNext = node.next;
    let prev: ListNode | null = groupNext;
    let current: ListNode | null = groupPrev.next;
    while (current !== groupNext) {
      const next = current!.next;
      current!.next = prev;
      prev = current;
      current = next;
    }

    const groupHead = groupPrev.next!;
    groupPrev.next = node;
    groupPrev = groupHead;
  }
}

console.log(listToArray(reverseKGroup(buildList([1, 2, 3, 4, 5]), 2)));
console.log(listToArray(reverseKGroup(buildList([1, 2, 3, 4, 5]), 3)));
