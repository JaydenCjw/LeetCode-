/**
 * 二叉树的最近公共祖先
 * 给定二叉树中两个节点 p、q，找最近公共祖先。
 *
 * 思路：后序递归；若左右分别找到 p/q，则当前为 LCA。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  return left ?? right;
}

const p = new TreeNode(5);
const q = new TreeNode(1);
const root = new TreeNode(3, p, q);
console.log(lowestCommonAncestor(root, p, q)?.val);
