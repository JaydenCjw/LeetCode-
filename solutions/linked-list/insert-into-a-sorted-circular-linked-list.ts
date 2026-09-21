/**
 * 循环有序链表的插入
 * 难度：★★★☆☆
 * 给定循环升序链表中的一个结点，插入一个新值并保持有序。升序允许在最大值后面接回最小值。
 *
 * 示例：循环链表 3 -> 4 -> 1，插入 2 => 3 -> 4 -> 1 -> 2
 *
 * 思路：找到第一个满足“当前值 <= 新值 <= 下一值”的位置；若新值落在最大值和最小值之间的断点，就插在断点上。转完一圈仍没有位置则所有值相同，插在任意处。
 * 时间 O(n)，空间 O(1)
 */

import { ListNode } from "@/types";

export function insert(head: ListNode | null, insertVal: number): ListNode | null {
  const node = new ListNode(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }
  let current = head;
  while (true) {
    const next = current.next ?? current;
    const inOrder = current.val <= insertVal && insertVal <= next.val;
    const atBoundary =
      current.val > next.val && (insertVal >= current.val || insertVal <= next.val);
    if (inOrder || atBoundary) {
      break;
    }
    current = next;
    if (current === head) {
      break;
    }
  }
  node.next = current.next;
  current.next = node;
  return head;
}

function toArray(head: ListNode | null): number[] {
  if (!head) {
    return [];
  }
  const result = [head.val];
  let current = head.next;
  while (current && current !== head) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

const third = new ListNode(1);
const second = new ListNode(4, third);
const first = new ListNode(3, second);
third.next = first;
console.log(toArray(insert(first, 2)));
