/**
 * 反向打印不可变链表
 * 难度：★★☆☆☆
 * 不修改链表，按从尾到头的顺序返回结点值。这里用普通链表模拟不可变链表。
 *
 * 示例：[1,2,3] => [3,2,1]
 *
 * 思路：用栈保存遍历顺序，再依次弹出。
 * 时间 O(n)，空间 O(n)
 */

import { ListNode, buildList } from "@/types";

export function printLinkedListInReverse(head: ListNode | null): number[] {
  const stack: number[] = [];
  let current = head;
  while (current) {
    stack.push(current.val);
    current = current.next;
  }
  const result: number[] = [];
  while (stack.length > 0) {
    const value = stack.pop();
    if (value !== undefined) {
      result.push(value);
    }
  }
  return result;
}

console.log(printLinkedListInReverse(buildList([1, 2, 3])));
