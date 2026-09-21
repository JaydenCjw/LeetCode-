/**
 * 二叉树的边界
 * 难度：★★★☆☆
 * 按逆时针返回边界：根、左边界（不含叶子）、从左到右的叶子、右边界自底向上（不含叶子）。结点不重复。
 *
 * 示例：[1,2,3,4,5,6,null,null,null,7,8,9,10] => [1,2,4,7,8,9,10,6,3]
 *
 * 思路：左边界优先走左孩子，否则走右孩子，停在叶子前。右边界对称，最后反转。叶子单独收集。
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

function isLeaf(node: TreeNode): boolean {
  return !node.left && !node.right;
}

export function boundaryOfBinaryTree(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  if (isLeaf(root)) {
    return [root.val];
  }

  const result = [root.val];
  let left = root.left;
  while (left && !isLeaf(left)) {
    result.push(left.val);
    left = left.left ?? left.right;
  }

  const collectLeaves = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    if (isLeaf(node)) {
      result.push(node.val);
      return;
    }
    collectLeaves(node.left);
    collectLeaves(node.right);
  };
  collectLeaves(root);

  const right: number[] = [];
  let side = root.right;
  while (side && !isLeaf(side)) {
    right.push(side.val);
    side = side.right ?? side.left;
  }
  for (let i = right.length - 1; i >= 0; i -= 1) {
    result.push(right[i]);
  }
  return result;
}

console.log(
  boundaryOfBinaryTree(buildTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10])),
);
