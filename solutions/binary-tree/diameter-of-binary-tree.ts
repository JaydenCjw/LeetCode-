/**
 * 二叉树的直径
 * 直径定义为任意两节点路径长度的最大值（边数）。
 *
 * 示例：
 *     1
 *    / \
 *   2   3
 *  / \
 * 4   5  => 3（路径 4-2-1-3 或 5-2-1-3）
 *
 * 思路：递归求深度时同步更新直径 = 左深 + 右深。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  const depth = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left = depth(node.left);
    const right = depth(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  };

  depth(root);
  return diameter;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);
console.log(diameterOfBinaryTree(root));
