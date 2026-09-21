/**
 * 路径总和 II
 * 找出所有根到叶路径，使其节点值之和等于 targetSum。
 *
 * 思路：DFS 回溯收集路径。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  const dfs = (node: TreeNode | null, remain: number): void => {
    if (!node) return;

    path.push(node.val);
    if (!node.left && !node.right && remain === node.val) {
      result.push([...path]);
    } else {
      dfs(node.left, remain - node.val);
      dfs(node.right, remain - node.val);
    }
    path.pop();
  };

  dfs(root, targetSum);
  return result;
}

const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))),
);
console.log(pathSum(root, 22));
