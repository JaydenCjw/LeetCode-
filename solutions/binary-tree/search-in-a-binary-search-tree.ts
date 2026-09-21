/**
 * 二叉搜索树中的搜索
 * 难度：★☆☆☆☆
 * 在二叉搜索树中查找值等于 val 的结点，返回以它为根的子树；不存在则返回空。
 *
 * 示例：root = [4,2,7,1,3]，val = 2，中序为 [1,2,3]
 *
 * 思路：小于当前值向左，大于向右。
 * 时间 O(h)，空间 O(1)
 */

import { TreeNode } from "@/types";

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let current = root;
  while (current) {
    if (current.val === val) {
      return current;
    }
    current = val < current.val ? current.left : current.right;
  }
  return null;
}

function inorder(node: TreeNode | null, result: number[]): void {
  if (!node) {
    return;
  }
  inorder(node.left, result);
  result.push(node.val);
  inorder(node.right, result);
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7),
);
const order: number[] = [];
inorder(searchBST(root, 2), order);
console.log(order);
