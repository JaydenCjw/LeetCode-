/**
 * 完全二叉树的节点个数
 * 难度：★★★☆☆
 * 给出完全二叉树的根，返回节点个数。要求低于 O(n)。
 *
 * 思路：左右高度相等则是满二叉树，用 2^h-1；否则递归左右。
 * 时间 O(log^2 n)，空间 O(log n)
 */

import { TreeNode } from "@/types";

function leftHeight(node: TreeNode | null): number {
  let height = 0;
  while (node) {
    height++;
    node = node.left;
  }
  return height;
}

export function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const left = leftHeight(root.left);
  const right = leftHeight(root.right);
  if (left === right) {
    return (1 << left) + countNodes(root.right);
  }
  return (1 << right) + countNodes(root.left);
}

console.log(countNodes(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)))));
