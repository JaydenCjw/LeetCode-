/**
 * 递增顺序搜索树
 * 难度：★★☆☆☆
 * 按中序把二叉搜索树重排成只有右孩子的递增链表。
 *
 * 示例：[2,1,3] => 沿右孩子得到 [1,2,3]
 *
 * 思路：中序遍历时把左孩子清空，并依次接到上一个结点的右边。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode(0);
  let prev = dummy;
  const walk = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    walk(node.left);
    node.left = null;
    prev.right = node;
    prev = node;
    walk(node.right);
  };
  walk(root);
  return dummy.right;
}

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const chain: number[] = [];
let current = increasingBST(root);
while (current) {
  chain.push(current.val);
  current = current.right;
}
console.log(chain);
