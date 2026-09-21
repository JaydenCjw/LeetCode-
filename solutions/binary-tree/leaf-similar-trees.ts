/**
 * 叶子相似的树
 * 难度：★★☆☆☆
 * 若两棵树从左到右的叶子序列相同，则它们叶子相似。
 *
 * 示例：两棵叶子都是 1、2 的树 => true
 *
 * 思路：分别收集叶子序列，再逐个比较。
 * 时间 O(n + m)，空间 O(n + m)
 */

import { TreeNode } from "@/types";

function leaves(root: TreeNode | null): number[] {
  const result: number[] = [];
  const walk = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      result.push(node.val);
      return;
    }
    walk(node.left);
    walk(node.right);
  };
  walk(root);
  return result;
}

export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const first = leaves(root1);
  const second = leaves(root2);
  if (first.length !== second.length) {
    return false;
  }
  return first.every((value, index) => value === second[index]);
}

const treeA = new TreeNode(3, new TreeNode(1), new TreeNode(2));
const treeB = new TreeNode(8, new TreeNode(1), new TreeNode(4, new TreeNode(2), null));
console.log(leafSimilar(treeA, treeB));
