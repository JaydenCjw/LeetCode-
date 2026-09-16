/**
 * 226. 翻转二叉树
 * 翻转一棵二叉树（左右子树互换）。
 *
 * 思路：递归交换左右子树。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(invertTree(root));
