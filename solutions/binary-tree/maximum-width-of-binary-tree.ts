/**
 * 二叉树最大宽度
 * 难度：★★★☆☆
 * 宽度是同一层最左与最右非空结点之间的下标差加一，空位也算进下标。返回最大宽度。
 *
 * 示例：[1,3,2,5,3,null,9] => 4
 *
 * 思路：按完全二叉树的堆下标做层序遍历。每层用最左下标归一化，避免数字过大。
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

export function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let best = 0;
  const queue: Array<{ node: TreeNode; index: number }> = [{ node: root, index: 0 }];
  while (queue.length > 0) {
    const size = queue.length;
    const base = queue[0].index;
    let first = 0;
    let last = 0;
    for (let i = 0; i < size; i += 1) {
      const item = queue.shift();
      if (!item) {
        continue;
      }
      const index = item.index - base;
      if (i === 0) {
        first = index;
      }
      if (i === size - 1) {
        last = index;
      }
      if (item.node.left) {
        queue.push({ node: item.node.left, index: index * 2 });
      }
      if (item.node.right) {
        queue.push({ node: item.node.right, index: index * 2 + 1 });
      }
    }
    best = Math.max(best, last - first + 1);
  }
  return best;
}

console.log(widthOfBinaryTree(buildTree([1, 3, 2, 5, 3, null, 9])));
