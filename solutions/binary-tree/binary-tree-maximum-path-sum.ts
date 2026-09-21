/**
 * 二叉树的最大路径和
 * 路径可从任意节点开始结束，至少含一个节点，求路径和最大值。
 *
 * 思路：后序，对每个节点计算「贡献」= 节点值 + max(0,左/右贡献)。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function maxPathSum(root: TreeNode | null): number {
  let best = Number.NEGATIVE_INFINITY;

  const gain = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = Math.max(0, gain(node.left));
    const right = Math.max(0, gain(node.right));
    best = Math.max(best, node.val + left + right);
    return node.val + Math.max(left, right);
  };

  gain(root);
  return best;
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(root));
