/**
 * 二叉树的中序遍历
 * 返回二叉树的中序遍历结果（左-根-右）。
 *
 * 思路：递归或迭代栈；此处用迭代演示。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    result.push(current.val);
    current = current.right;
  }

  return result;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(root));
