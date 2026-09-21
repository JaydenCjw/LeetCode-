/**
 * 打家劫舍 III
 * 难度：★★★☆☆
 * 二叉树房屋，相邻（父子）不能同时偷，求最大金额。
 *
 * 思路：每个节点返回 [偷, 不偷]。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

function robNode(node: TreeNode | null): [number, number] {
  if (!node) {
    return [0, 0];
  }
  const left = robNode(node.left);
  const right = robNode(node.right);
  const take = node.val + left[1] + right[1];
  const skip = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return [take, skip];
}

export function rob(root: TreeNode | null): number {
  const [take, skip] = robNode(root);
  return Math.max(take, skip);
}

console.log(rob(new TreeNode(3, new TreeNode(2, null, new TreeNode(3)), new TreeNode(3, null, new TreeNode(1)))));
