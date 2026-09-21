/**
 * 两数之和 IV - 输入二叉搜索树
 * 难度：★★☆☆☆
 * 判断二叉搜索树中是否存在两个结点的值之和等于 k。
 *
 * 示例：[5,3,6,2,4,null,7]，k = 9 => true
 *
 * 思路：深度优先，用集合记录已经见过的值，检查 k 减去当前值是否出现过。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function findTarget(root: TreeNode | null, k: number): boolean {
  const seen = new Set<number>();
  const walk = (node: TreeNode | null): boolean => {
    if (!node) {
      return false;
    }
    if (seen.has(k - node.val)) {
      return true;
    }
    seen.add(node.val);
    return walk(node.left) || walk(node.right);
  };
  return walk(root);
}

const root = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(6, null, new TreeNode(7)),
);
console.log(findTarget(root, 9));
