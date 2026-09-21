/**
 * 把二叉搜索树转换为累加树
 * 难度：★★☆☆☆
 * 把每个结点的值改成原树中所有大于等于该结点的值之和。
 *
 * 示例：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
 * 中序变为 [36,36,35,33,30,26,21,15,8]
 *
 * 思路：逆中序（右、根、左）累加，当前结点改成累加和。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  const walk = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    walk(node.right);
    sum += node.val;
    node.val = sum;
    walk(node.left);
  };
  walk(root);
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

const root = new TreeNode(
  4,
  new TreeNode(1, new TreeNode(0), new TreeNode(2, null, new TreeNode(3))),
  new TreeNode(6, new TreeNode(5), new TreeNode(7, null, new TreeNode(8))),
);
const order: number[] = [];
inorder(convertBST(root), order);
console.log(order);
