/**
 * 有序链表转换二叉搜索树
 * 难度：★★★☆☆
 * 升序链表转成高度平衡的二叉搜索树。
 *
 * 示例：[-10,-3,0,5,9]，中序遍历应仍是原序列。
 *
 * 思路：先收集成数组，再每次取中点作为根，左右区间递归建树。
 * 时间 O(n)，空间 O(n)
 */

import { ListNode, TreeNode, buildList } from "@/types";

function buildBalanced(values: number[], left: number, right: number): TreeNode | null {
  if (left > right) {
    return null;
  }
  const mid = left + Math.floor((right - left) / 2);
  return new TreeNode(
    values[mid],
    buildBalanced(values, left, mid - 1),
    buildBalanced(values, mid + 1, right),
  );
}

export function sortedListToBST(head: ListNode | null): TreeNode | null {
  const values: number[] = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  return buildBalanced(values, 0, values.length - 1);
}

function inorder(root: TreeNode | null, result: number[]): void {
  if (!root) {
    return;
  }
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
}

const order: number[] = [];
inorder(sortedListToBST(buildList([-10, -3, 0, 5, 9])), order);
console.log(order);
