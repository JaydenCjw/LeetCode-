/**
 * 从链表中移除在数组中存在的节点
 * 难度：★★☆☆☆
 * 删除链表中所有值出现在数组 nums 里的结点。
 *
 * 示例：nums = [1,2,3]，head = [1,2,3,4,5] => [4,5]
 *
 * 思路：把数组放进集合，哑结点后一次扫描跳过命中的结点。
 * 时间 O(n + m)，空间 O(m)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const banned = new Set(nums);
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;
  while (current) {
    if (banned.has(current.val)) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummy.next;
}

console.log(listToArray(modifiedList([1, 2, 3], buildList([1, 2, 3, 4, 5]))));
