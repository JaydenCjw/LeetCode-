/**
 * 链表中的两数对节点交换
 * 难度：★★★☆☆
 * 交换链表正数第 k 个结点和倒数第 k 个结点的值。
 *
 * 示例：[1,2,3,4,5]，k = 2 => [1,4,3,2,5]
 *
 * 思路：先走到第 k 个结点，再让另一个指针与它一起走到表尾，后者正好是倒数第 k 个。交换两结点的值。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let first = head;
  for (let i = 1; i < k; i += 1) {
    first = first?.next ?? null;
  }

  let second = head;
  let tail = first;
  while (tail?.next) {
    tail = tail.next;
    second = second?.next ?? null;
  }

  if (first && second) {
    const temp = first.val;
    first.val = second.val;
    second.val = temp;
  }
  return head;
}

console.log(listToArray(swapNodes(buildList([1, 2, 3, 4, 5]), 2)));
