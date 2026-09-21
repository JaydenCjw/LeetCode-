/**
 * 排序链表
 * 难度：★★★☆☆
 * 对链表 O(n log n) 排序，常数级额外空间优先归并。
 *
 * 示例：4->2->1->3 => 1->2->3->4
 *
 * 思路：快慢指针拆半 + 归并。
 * 时间 O(n log n)，空间 O(log n)（递归栈）
 */

import { ListNode, buildList, listToArray } from "@/types";

export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }
  prev!.next = null;

  const left = sortList(head);
  const right = sortList(slow);
  return merge(left, right);
}

function merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 ?? list2;
  return dummy.next;
}

console.log(listToArray(sortList(buildList([4, 2, 1, 3]))));
