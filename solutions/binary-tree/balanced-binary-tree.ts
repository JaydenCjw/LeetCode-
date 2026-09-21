/**
 * 平衡二叉树
 * 难度：★☆☆☆☆
 * 判断二叉树是否高度平衡：每个节点左右子树高度差不超过 1。
 *
 * 思路：后序返回高度，不平衡时返回 -1 提前结束。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

function height(node: TreeNode | null): number {
  if (!node) {
    return 0;
  }
  const left = height(node.left);
  const right = height(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}

export function isBalanced(root: TreeNode | null): boolean {
  return height(root) !== -1;
}

console.log(isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
