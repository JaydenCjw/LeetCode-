/**
 * 路径总和
 * 难度：★★☆☆☆
 * 判断是否存在根到叶路径，节点值之和等于 targetSum。
 *
 * 示例：
 *       5
 *      / \
 *     4   8
 *    /   / \
 *   11  13  4
 *  /  \      \
 * 7    2      1 , targetSum = 22 => true
 *
 * 思路：DFS 递减目标值。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  const remain = targetSum - root.val;
  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain);
}

const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
);
console.log(hasPathSum(root, 22));
