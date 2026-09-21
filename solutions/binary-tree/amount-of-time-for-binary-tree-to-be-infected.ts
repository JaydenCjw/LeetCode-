/**
 * 感染二叉树需要的总时间
 * 难度：★★★☆☆
 * 从值为 start 的结点开始感染，每分钟传给相邻结点（父或子）。返回整棵树被感染的分钟数。
 *
 * 示例：[1,5,3,null,4,10,6,9,2]，start = 3 => 4
 *
 * 思路：把树看成无向图，从起点广度优先，最远距离就是所需时间。
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

export function amountOfTime(root: TreeNode | null, start: number): number {
  const parent = new Map<TreeNode, TreeNode | null>();
  const bind = (node: TreeNode | null, from: TreeNode | null): TreeNode | null => {
    if (!node) {
      return null;
    }
    parent.set(node, from);
    if (node.val === start) {
      bind(node.left, node);
      bind(node.right, node);
      return node;
    }
    return bind(node.left, node) ?? bind(node.right, node);
  };
  const startNode = bind(root, null);
  if (!startNode) {
    return 0;
  }

  const seen = new Set<TreeNode>([startNode]);
  const queue: Array<{ node: TreeNode; dist: number }> = [{ node: startNode, dist: 0 }];
  let answer = 0;
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) {
      break;
    }
    answer = item.dist;
    const neighbors = [item.node.left, item.node.right, parent.get(item.node) ?? null];
    for (const next of neighbors) {
      if (next && !seen.has(next)) {
        seen.add(next);
        queue.push({ node: next, dist: item.dist + 1 });
      }
    }
  }
  return answer;
}

console.log(amountOfTime(buildTree([1, 5, 3, null, 4, 10, 6, 9, 2]), 3));
