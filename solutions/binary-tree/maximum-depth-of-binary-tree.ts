/**
 * 104. 二叉树的最大深度
 * 给定二叉树，返回其最大深度（根到最远叶节点的最长路径上的节点数）。
 *
 * 思路：递归取左右子树深度的较大值 + 1。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(root));
