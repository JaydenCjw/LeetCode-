/**
 * 二叉树的最小深度
 * 难度：★★☆☆☆
 * 根到最近叶子节点的节点数。
 *
 * 示例：根 3，左 9，右 20（左右 15、7）=> 2
 *
 * 思路：一边为空时只能走另一边，避免把空子树当成叶子。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

console.log(minDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
