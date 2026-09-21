/**
 * 修剪二叉搜索树
 * 难度：★★☆☆☆
 * 删除所有值不在 [low, high] 内的结点，剩余部分仍是二叉搜索树。
 *
 * 示例：[1,0,2]，low = 1，high = 2 => 中序 [1,2]
 *
 * 思路：当前值小于 low 时整棵左子树都更小，返回修剪后的右子树；大于 high 时返回左子树。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
}

function inorder(node: TreeNode | null, result: number[]): void {
  if (!node) {
    return;
  }
  inorder(node.left, result);
  result.push(node.val);
  inorder(node.right, result);
}

const root = new TreeNode(1, new TreeNode(0), new TreeNode(2));
const order: number[] = [];
inorder(trimBST(root, 1, 2), order);
console.log(order);
