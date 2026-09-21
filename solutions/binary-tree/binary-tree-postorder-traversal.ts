/**
 * 二叉树的后序遍历
 * 难度：★☆☆☆☆
 * 按左、右、根的顺序返回结点值。
 *
 * 示例：[1,null,2,3] => [3,2,1]
 *
 * 思路：递归先遍历左右子树，再记录根。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const walk = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    walk(node.left);
    walk(node.right);
    result.push(node.val);
  };
  walk(root);
  return result;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(postorderTraversal(root));
