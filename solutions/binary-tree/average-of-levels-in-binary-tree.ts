/**
 * 二叉树的层平均值
 * 难度：★★☆☆☆
 * 返回每一层结点值的平均值。
 *
 * 示例：[3,9,20,null,null,15,7] => [3, 14.5, 11]
 *
 * 思路：层序遍历，每层求和再除以结点个数。
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

export function averageOfLevels(root: TreeNode | null): number[] {
  const averages: number[] = [];
  if (!root) {
    return averages;
  }
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    averages.push(sum / size);
  }
  return averages;
}

console.log(averageOfLevels(buildTree([3, 9, 20, null, null, 15, 7])));
