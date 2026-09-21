/**
 * 二叉树中第二小的节点
 * 难度：★★☆☆☆
 * 特殊二叉树：每个非叶结点的值等于其两个孩子中的较小值。返回严格大于根的最小值，不存在则返回 -1。
 *
 * 示例：[2,2,5,null,null,5,7] => 5
 *
 * 思路：根一定是全局最小。只在值等于根的子树里继续找，记录比根大的最小值。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }
  const rootValue = root.val;
  let second = Number.POSITIVE_INFINITY;
  const walk = (node: TreeNode | null): void => {
    if (!node || node.val > second) {
      return;
    }
    if (node.val > rootValue) {
      second = node.val;
      return;
    }
    walk(node.left);
    walk(node.right);
  };
  walk(root);
  return second === Number.POSITIVE_INFINITY ? -1 : second;
}

const root = new TreeNode(
  2,
  new TreeNode(2),
  new TreeNode(5, new TreeNode(5), new TreeNode(7)),
);
console.log(findSecondMinimumValue(root));
