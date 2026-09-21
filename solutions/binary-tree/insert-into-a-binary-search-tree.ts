/**
 * 二叉搜索树中的插入操作
 * 难度：★★☆☆☆
 * 把值插入二叉搜索树，插入后中序遍历仍然有序。
 *
 * 示例：[4,2,7,1,3] 插入 5，中序为 [1,2,3,4,5,7]
 *
 * 思路：沿搜索路径走到空位，把新结点接到父结点的左或右。
 * 时间 O(h)，空间 O(1)
 */

import { TreeNode } from "@/types";

export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }
  let current = root;
  while (true) {
    if (val < current.val) {
      if (!current.left) {
        current.left = new TreeNode(val);
        break;
      }
      current = current.left;
    } else if (!current.right) {
      current.right = new TreeNode(val);
      break;
    } else {
      current = current.right;
    }
  }
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
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7),
);
const order: number[] = [];
inorder(insertIntoBST(root, 5), order);
console.log(order);
