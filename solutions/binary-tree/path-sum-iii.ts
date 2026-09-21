/**
 * 路径总和 III
 * 难度：★★★☆☆
 * 统计二叉树中节点值之和等于 targetSum 的路径条数。路径不必从根开始、不必到叶子，但必须向下。
 *
 * 思路：前缀和 + 哈希，当前前缀减 target 出现过的次数即一条路径。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefixCount = new Map<number, number>([[0, 1]]);

  const dfs = (node: TreeNode | null, current: number): number => {
    if (!node) {
      return 0;
    }
    current += node.val;
    let count = prefixCount.get(current - targetSum) ?? 0;
    prefixCount.set(current, (prefixCount.get(current) ?? 0) + 1);
    count += dfs(node.left, current) + dfs(node.right, current);
    prefixCount.set(current, (prefixCount.get(current) ?? 0) - 1);
    return count;
  };

  return dfs(root, 0);
}

const root = new TreeNode(10, new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), new TreeNode(2, null, new TreeNode(1))), new TreeNode(-3, null, new TreeNode(11)));
console.log(pathSum(root, 8));
