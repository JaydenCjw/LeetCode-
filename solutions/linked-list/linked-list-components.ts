/**
 * 链表组件
 * 难度：★★★☆☆
 * nums 是链表中若干不同值。若相邻结点的值都在 nums 中，它们属于同一组件。返回组件个数。
 *
 * 示例：nums = [0,1,3]，head = 0 -> 1 -> 2 -> 3 => 2
 *
 * 思路：用集合判断当前值是否入选。从“不在组件中”进入“在组件中”时计数加一。
 * 时间 O(n + m)，空间 O(m)
 */

import { ListNode, buildList } from "@/types";

export function numComponents(head: ListNode | null, nums: number[]): number {
  const selected = new Set(nums);
  let count = 0;
  let inside = false;
  let current = head;
  while (current) {
    if (selected.has(current.val)) {
      if (!inside) {
        count += 1;
        inside = true;
      }
    } else {
      inside = false;
    }
    current = current.next;
  }
  return count;
}

console.log(numComponents(buildList([0, 1, 2, 3]), [0, 1, 3]));
