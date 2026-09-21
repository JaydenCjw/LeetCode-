/**
 * 反转偶数长度组
 * 难度：★★★☆☆
 * 把链表按长度 1、2、3… 分组，最后一组可以更短。反转其中长度为偶数的组。
 *
 * 示例：[5,2,6,3,9,1,7,3,8,4] => [5,6,2,3,9,1,4,8,3,7]
 *
 * 思路：第一组只有头结点，长度为奇数，保持不动。之后每次取出一组，偶数长度则逆序接回。
 * 时间 O(n)，空间 O(n)（暂存当前组）
 */

import { ListNode, buildList, listToArray } from "@/types";

export function reverseEvenLengthGroups(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let prev = head;
  let current = head.next;
  let group = 2;
  while (current) {
    const nodes: ListNode[] = [];
    let count = 0;
    while (current && count < group) {
      nodes.push(current);
      current = current.next;
      count += 1;
    }
    if (count % 2 === 0) {
      for (let i = count - 1; i >= 0; i -= 1) {
        prev.next = nodes[i];
        prev = nodes[i];
      }
      prev.next = current;
    } else {
      prev = nodes[count - 1];
    }
    group += 1;
  }
  return head;
}

console.log(
  listToArray(reverseEvenLengthGroups(buildList([5, 2, 6, 3, 9, 1, 7, 3, 8, 4]))),
);
