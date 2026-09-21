/**
 * 合并零之间的节点
 * 难度：★★☆☆☆
 * 链表以 0 开头和结尾，中间由 0 分隔若干段。把每段的和合并成一个结点。
 *
 * 示例：[0,3,1,0,4,5,2,0] => [4,11]
 *
 * 思路：遇到 0 就把当前累加和接到结果上，然后清零。
 * 时间 O(n)，空间 O(1)（不计输出）
 */

import { ListNode, buildList, listToArray } from "@/types";

export function mergeNodes(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  let sum = 0;
  let current = head?.next ?? null;
  while (current) {
    if (current.val === 0) {
      tail.next = new ListNode(sum);
      tail = tail.next;
      sum = 0;
    } else {
      sum += current.val;
    }
    current = current.next;
  }
  return dummy.next;
}

console.log(listToArray(mergeNodes(buildList([0, 3, 1, 0, 4, 5, 2, 0]))));
