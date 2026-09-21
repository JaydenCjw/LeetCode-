/**
 * 在链表中插入最大公约数
 * 难度：★★☆☆☆
 * 在每两个相邻结点之间插入它们的最大公约数。
 *
 * 示例：[18,6,10,3] => [18,6,6,2,10,1,3]
 *
 * 思路：辗转相除求 gcd，沿链表逐对插入。
 * 时间 O(n log M)，空间 O(1)（不计新结点）
 */

import { ListNode, buildList, listToArray } from "@/types";

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const next = a % b;
    a = b;
    b = next;
  }
  return a;
}

export function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let current = head;
  while (current?.next) {
    const divisor = gcd(current.val, current.next.val);
    current.next = new ListNode(divisor, current.next);
    current = current.next.next;
  }
  return head;
}

console.log(listToArray(insertGreatestCommonDivisors(buildList([18, 6, 10, 3]))));
