/**
 * 二叉树的层序遍历 II
 * 难度：★★☆☆☆
 * 自底向上返回每一层的结点值。
 *
 * 示例：[3,9,20,null,null,15,7] => [[15,7],[9,20],[3]]
 *
 * 思路：普通层序遍历，最后把层数组反转。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

function buildTree(values: Array<number | null>): TreeNode | null {
  if (values.length === 0 || values[0] === null) {
    return null;
  }
  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let index = 1;
  while (index < values.length) {
    const node = queue.shift();
    if (!node) {
      break;
    }
    const left = values[index];
    index += 1;
    if (left !== undefined && left !== null) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    const right = values[index];
    index += 1;
    if (right !== undefined && right !== null) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;
}

export function levelOrderBottom(root: TreeNode | null): number[][] {
  const levels: number[][] = [];
  if (!root) {
    return levels;
  }
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const size = queue.length;
    const level: number[] = [];
    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    levels.push(level);
  }
  levels.reverse();
  return levels;
}

console.log(levelOrderBottom(buildTree([3, 9, 20, null, null, 15, 7])));
