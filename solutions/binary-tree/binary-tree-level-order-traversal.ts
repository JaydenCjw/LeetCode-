/**
 * 二叉树的层序遍历
 * 按层返回节点值，每一层一个数组。
 *
 * 思路：BFS 队列，按层消费。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;
    const level: number[] = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(levelOrder(root));
