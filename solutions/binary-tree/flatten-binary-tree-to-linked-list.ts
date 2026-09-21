/**
 * 二叉树展开为链表
 * 难度：★★★☆☆
 * 按前序将二叉树原地展开为链表（right 当 next，left 置空）。
 *
 * 思路：后序：先展开左右，再把右子树接到左子树末尾。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function flatten(root: TreeNode | null): void {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  const right = root.right;
  root.right = root.left;
  root.left = null;

  let current = root;
  while (current.right) {
    current = current.right;
  }
  current.right = right;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)));
flatten(root);
const values: number[] = [];
let node: TreeNode | null = root;
while (node) {
  values.push(node.val);
  node = node.right;
}
console.log(values);
