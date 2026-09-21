/**
 * 二叉树的锯齿形层序遍历
 * 难度：★★★☆☆
 * 层序遍历，奇数层从左到右，偶数层从右到左。
 *
 * 思路：BFS，偶数层反转当前层结果。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const size = queue.length;
    const level: number[] = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (!leftToRight) {
      level.reverse();
    }
    result.push(level);
    leftToRight = !leftToRight;
  }

  return result;
}

console.log(zigzagLevelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
