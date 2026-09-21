/**
 * 相同的树
 * 难度：★☆☆☆☆
 * 判断两棵二叉树是否结构相同且节点值相同。
 *
 * 思路：同时递归比较左右子树。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p || !q) {
    return p === q;
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const a = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const b = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(a, b));
