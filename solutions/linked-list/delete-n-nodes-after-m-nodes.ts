/**
 * 删除链表 M 个节点之后的 N 个节点
 * 难度：★★☆☆☆
 * 从链表头开始，反复保留 m 个结点、删除紧接着的 n 个结点，直到链表结束。
 *
 * 示例：head = [1,2,3,4,5,6,7,8,9,10,11,12,13]，m = 2，n = 3
 * => [1,2,6,7,11,12]
 *
 * 思路：每次先走 m 步停在保留段末尾，再跳过最多 n 个结点。
 * 时间 O(长度)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  let current = head;
  while (current) {
    for (let i = 1; i < m && current.next; i += 1) {
      current = current.next;
    }
    let skipped = current.next;
    for (let i = 0; i < n && skipped; i += 1) {
      skipped = skipped.next;
    }
    current.next = skipped;
    current = skipped;
  }
  return head;
}

console.log(
  listToArray(
    deleteNodes(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 2, 3),
  ),
);
