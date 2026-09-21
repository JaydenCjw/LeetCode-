/**
 * 二叉树的右视图
 * 难度：★★★☆☆
 * 返回从右侧所能看到的节点值（自上而下）。
 *
 * 示例：
 *     1
 *    / \
 *   2   3
 *    \   \
 *     5   4  => [1,3,4]
 *
 * 思路：层序遍历取每层最后一个。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (i === size - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

const root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4)),
);
console.log(rightSideView(root));
