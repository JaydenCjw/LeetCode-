/**
 * 二叉搜索树的范围和
 * 难度：★★☆☆☆
 * 返回二叉搜索树中值落在 [low, high] 内的结点之和。
 *
 * 示例：[10,5,15,3,7,null,18]，low = 7，high = 15 => 32
 *
 * 思路：利用有序性剪枝。当前值小于 low 只走右子树，大于 high 只走左子树。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) {
    return 0;
  }
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}

const root = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(7)),
  new TreeNode(15, null, new TreeNode(18)),
);
console.log(rangeSumBST(root, 7, 15));
