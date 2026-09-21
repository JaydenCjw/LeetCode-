/**
 * 删除链表中的节点
 * 难度：★☆☆☆☆
 * 只给出要删除的非尾节点，无法访问头结点。将该节点改成后继的值并跳过后继。
 *
 * 示例：4 -> 5 -> 1 -> 9，删除节点 5 => 4 -> 1 -> 9
 *
 * 思路：把后继的值前移，再让当前节点指向后继的后继。
 * 时间 O(1)，空间 O(1)
 */

import { ListNode, buildList, listToArray } from "@/types";

export function deleteNode(node: ListNode): void {
  const next = node.next;
  if (!next) {
    return;
  }
  node.val = next.val;
  node.next = next.next;
}

const head = buildList([4, 5, 1, 9]);
const target = head?.next;
if (target) {
  deleteNode(target);
}
console.log(listToArray(head));
