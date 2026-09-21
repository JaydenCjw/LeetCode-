/**
 * 合并两个链表
 * 难度：★★★☆☆
 * 删除 list1 中下标 a 到 b（含）的结点，并把 list2 接到这个缺口上。
 *
 * 示例：list1 = 0->1->2->3->4->5，a = 3，b = 4，list2 = 100->101->102
 * => 0->1->2->100->101->102->5
 *
 * 思路：找到 a 的前驱和 b 的后继，把 list2 的头尾分别接上。
 * 时间 O(n + m)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null,
): ListNode | null {
  let prev = list1;
  for (let i = 1; i < a; i += 1) {
    prev = prev?.next ?? null;
  }

  let after = prev;
  for (let i = 0; i < b - a + 2; i += 1) {
    after = after?.next ?? null;
  }

  let tail = list2;
  while (tail?.next) {
    tail = tail.next;
  }
  if (prev) {
    prev.next = list2;
  }
  if (tail) {
    tail.next = after;
  }
  return list1;
}

console.log(
  listToArray(
    mergeInBetween(buildList([0, 1, 2, 3, 4, 5]), 3, 4, buildList([100, 101, 102])),
  ),
);
