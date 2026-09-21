/**
 * 二叉树的前序遍历
 * 难度：★☆☆☆☆
 * 返回二叉树的前序遍历（根、左、右）。
 *
 * 思路：迭代栈，先压右再压左。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length > 0) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}

console.log(preorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))));
