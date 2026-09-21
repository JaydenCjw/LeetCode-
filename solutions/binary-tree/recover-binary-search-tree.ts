/**
 * 恢复二叉搜索树
 * 难度：★★★☆☆
 * 二叉搜索树中有两个结点被交换，原地换回，使中序重新有序。
 *
 * 示例：[3,1,4,null,null,2] 中 2 和 3 被交换，恢复后中序为 [1,2,3,4]
 *
 * 思路：中序应严格递增。第一次下降记下较大的结点，最后一次下降记下较小的结点，交换它们的值。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function recoverTree(root: TreeNode | null): void {
  const state: { first: TreeNode | null; second: TreeNode | null; prev: TreeNode | null } = {
    first: null,
    second: null,
    prev: null,
  };
  const walk = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    walk(node.left);
    if (state.prev && state.prev.val > node.val) {
      if (!state.first) {
        state.first = state.prev;
      }
      state.second = node;
    }
    state.prev = node;
    walk(node.right);
  };
  walk(root);
  if (state.first && state.second) {
    const temp = state.first.val;
    state.first.val = state.second.val;
    state.second.val = temp;
  }
}

function inorder(node: TreeNode | null, result: number[]): void {
  if (!node) {
    return;
  }
  inorder(node.left, result);
  result.push(node.val);
  inorder(node.right, result);
}

const root = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2)));
recoverTree(root);
const order: number[] = [];
inorder(root, order);
console.log(order);
