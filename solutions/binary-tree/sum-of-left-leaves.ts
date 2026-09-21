/**
 * 左叶子之和
 * 难度：★☆☆☆☆
 * 左叶子是某个结点的左孩子，且它自己没有孩子。返回所有左叶子的值之和。
 *
 * 示例：[3,9,20,null,null,15,7] => 24
 *
 * 思路：递归时标记当前结点是否为父结点的左孩子，叶子且是左孩子就累加。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function sumOfLeftLeaves(root: TreeNode | null): number {
  const walk = (node: TreeNode | null, isLeft: boolean): number => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return isLeft ? node.val : 0;
    }
    return walk(node.left, true) + walk(node.right, false);
  };
  return walk(root, false);
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log(sumOfLeftLeaves(root));
