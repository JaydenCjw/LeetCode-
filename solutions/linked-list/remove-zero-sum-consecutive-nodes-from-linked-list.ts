/**
 * 从链表中删去总和值为零的连续节点
 * 难度：★★★☆☆
 * 反复删除和为 0 的连续片段，返回剩余链表。答案可能不唯一。
 *
 * 示例：[1,2,-3,3,1] => [3,1]
 *
 * 思路：前缀和相同的两处之间和为 0。用哈希表记录每个前缀和最后出现的结点，再按前缀和跳过中间段。
 * 时间 O(n)，空间 O(n)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  const last = new Map<number, ListNode>();
  let sum = 0;
  let current: ListNode | null = dummy;
  while (current) {
    sum += current.val;
    last.set(sum, current);
    current = current.next;
  }

  sum = 0;
  current = dummy;
  while (current) {
    sum += current.val;
    current.next = last.get(sum)?.next ?? null;
    current = current.next;
  }
  return dummy.next;
}

console.log(listToArray(removeZeroSumSublists(buildList([1, 2, -3, 3, 1]))));
