/**
 * 二叉搜索树中第 K 小的元素
 * 难度：★★★☆☆
 * 返回 BST 中第 k 小的元素（1-indexed）。
 *
 * 思路：中序遍历第 k 个。
 * 时间 O(h+k)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let current = root;
  let count = 0;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop()!;
    count++;
    if (count === k) {
      return current.val;
    }
    current = current.right;
  }

  throw new Error("k 超出范围");
}

const root = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log(kthSmallest(root, 1));
