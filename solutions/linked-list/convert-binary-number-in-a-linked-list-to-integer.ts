/**
 * 链表二进制转整数
 * 难度：★☆☆☆☆
 * 链表从头到尾表示一个二进制数，最高位在表头，返回对应的十进制整数。
 *
 * 示例：1 -> 0 -> 1 => 5
 *
 * 思路：从左到右，每走一步把当前结果左移一位再加当前位。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode, buildList } from "@/types";

export function getDecimalValue(head: ListNode | null): number {
  let result = 0;
  let current = head;
  while (current) {
    result = result * 2 + current.val;
    current = current.next;
  }
  return result;
}

console.log(getDecimalValue(buildList([1, 0, 1])));
