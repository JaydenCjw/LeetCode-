/**
 * 分隔链表
 * 难度：★★★☆☆
 * 把链表拆成 k 段，各段长度相差不超过 1，前面的段可以更长。
 *
 * 示例：head = 1 -> 2 -> 3，k = 5 => [[1],[2],[3],[],[]]
 *
 * 思路：先求长度，每段基础长度 floor(n/k)，前 n%k 段各多一个结点。
 * 时间 O(n + k)，空间 O(k)（不计输出链表本身的结点）
 */

import { ListNode, buildList, listToArray } from "@/types";

export function splitListToParts(
  head: ListNode | null,
  k: number,
): Array<ListNode | null> {
  let length = 0;
  let cursor = head;
  while (cursor) {
    length += 1;
    cursor = cursor.next;
  }

  const base = Math.floor(length / k);
  let extra = length % k;
  const parts: Array<ListNode | null> = [];
  cursor = head;
  for (let i = 0; i < k; i += 1) {
    const size = base + (extra > 0 ? 1 : 0);
    if (extra > 0) {
      extra -= 1;
    }
    parts.push(cursor);
    let prev: ListNode | null = null;
    for (let j = 0; j < size; j += 1) {
      prev = cursor;
      cursor = cursor?.next ?? null;
    }
    if (prev) {
      prev.next = null;
    }
  }
  return parts;
}

const parts = splitListToParts(buildList([1, 2, 3]), 5);
console.log(parts.map((part) => listToArray(part)));
