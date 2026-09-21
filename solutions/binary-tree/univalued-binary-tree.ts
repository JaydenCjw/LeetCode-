/**
 * 单值二叉树
 * 难度：★☆☆☆☆
 * 判断每个结点的值是否都相同。
 *
 * 示例：[1,1,1,1,1,null,1] => true
 *
 * 思路：用根的值对比整棵树。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const value = root.val;
  const walk = (node: TreeNode | null): boolean => {
    if (!node) {
      return true;
    }
    return node.val === value && walk(node.left) && walk(node.right);
  };
  return walk(root);
}

const root = new TreeNode(
  1,
  new TreeNode(1, new TreeNode(1), new TreeNode(1)),
  new TreeNode(1, null, new TreeNode(1)),
);
console.log(isUnivalTree(root));
