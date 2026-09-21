/**
 * 求根节点到叶节点数字之和
 * 难度：★★☆☆☆
 * 每条根到叶子的路径组成一个数，返回所有这种数的和。
 *
 * 示例：1->2, 1->3 => 12 + 13 = 25
 *
 * 思路：DFS 携带当前数值。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function sumNumbers(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, current: number): number => {
    if (!node) {
      return 0;
    }
    current = current * 10 + node.val;
    if (!node.left && !node.right) {
      return current;
    }
    return dfs(node.left, current) + dfs(node.right, current);
  };
  return dfs(root, 0);
}

console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
