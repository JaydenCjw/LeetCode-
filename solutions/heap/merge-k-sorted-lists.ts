/**
 * 合并 K 个升序链表
 * 给你一个链表数组，每个链表都已按升序排列，请合并成一个升序链表。
 *
 * 示例：lists = [[1,4,5],[1,3,4],[2,6]] => 1->1->2->3->4->4->5->6
 *
 * 思路：最小堆按节点值合并。
 * 时间 O(N log k)，空间 O(k)
 */

import { createMinHeap } from "@/heap";
import { ListNode, buildList, listToArray } from "@/types";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap = createMinHeap<ListNode>((a, b) => a.val < b.val);
  for (const head of lists) {
    if (head) {
      heap.push(head);
    }
  }

  const dummy = new ListNode(0);
  let current = dummy;

  while (heap.size > 0) {
    const node = heap.pop();
    current.next = node;
    current = current.next;
    if (node.next) {
      heap.push(node.next);
    }
  }

  return dummy.next;
}

console.log(
  listToArray(
    mergeKLists([buildList([1, 4, 5]), buildList([1, 3, 4]), buildList([2, 6])]),
  ),
);
