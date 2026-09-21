/**
 * 删除二叉搜索树中的节点
 * 难度：★★★☆☆
 * 删除 BST 中值为 key 的节点，并保持二叉搜索树性质。
 *
 * 思路：找到节点后，无子或单子直接替换；双子用后继值覆盖再删后继。
 * 时间 O(h)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (!root.left) {
    return root.right;
  } else if (!root.right) {
    return root.left;
  } else {
    let successor = root.right;
    while (successor.left) {
      successor = successor.left;
    }
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }
  return root;
}

console.log(deleteNode(new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6)), 3));
