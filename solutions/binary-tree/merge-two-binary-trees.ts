/**
 * 合并二叉树
 * 难度：★☆☆☆☆
 * 将两棵二叉树重叠合并：都有节点则值相加，否则取存在的那个。
 *
 * 思路：同步递归。
 * 时间 O(m+n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  return new TreeNode(root1.val + root2.val, mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right));
}

console.log(mergeTrees(new TreeNode(1, new TreeNode(3), new TreeNode(2)), new TreeNode(2, new TreeNode(1), new TreeNode(3))));
