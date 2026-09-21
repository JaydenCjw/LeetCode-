/**
 * 二叉树的垂序遍历
 * 难度：★★★★☆
 * 设根的列号为 0，左孩子列号减一，右孩子加一。按列从左到右输出；同一列按行号、再按值排序。
 *
 * 示例：[3,9,20,null,null,15,7] => [[9],[3,15],[20],[7]]
 *
 * 思路：记录每个结点的列、行和值，排序后按列分组。
 * 时间 O(n log n)，空间 O(n)
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

export function verticalTraversal(root: TreeNode | null): number[][] {
  const nodes: Array<[number, number, number]> = [];
  const walk = (node: TreeNode | null, row: number, col: number): void => {
    if (!node) {
      return;
    }
    nodes.push([col, row, node.val]);
    walk(node.left, row + 1, col - 1);
    walk(node.right, row + 1, col + 1);
  };
  walk(root, 0, 0);
  nodes.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  const result: number[][] = [];
  let lastCol: number | null = null;
  for (const [col, , value] of nodes) {
    if (lastCol !== col) {
      result.push([]);
      lastCol = col;
    }
    result[result.length - 1].push(value);
  }
  return result;
}

console.log(verticalTraversal(buildTree([3, 9, 20, null, null, 15, 7])));
