/**
 * 另一棵树的子树
 * 难度：★★☆☆☆
 * 判断 subRoot 是否为 root 的子树（结构与值都相同）。
 *
 * 思路：对每个节点做相同树判断。
 * 时间 O(m*n)，空间 O(h)
 */

import { TreeNode } from "@/types";

function isSame(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a || !b) {
    return a === b;
  }
  return a.val === b.val && isSame(a.left, b.left) && isSame(a.right, b.right);
}

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return !subRoot;
  }
  return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

console.log(isSubtree(new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5)), new TreeNode(4, new TreeNode(1), new TreeNode(2))));
