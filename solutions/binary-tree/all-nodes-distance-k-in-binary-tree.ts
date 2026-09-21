/**
 * 二叉树中所有距离为 K 的结点
 * 难度：★★★☆☆
 * 给定目标结点，返回与它距离恰好为 k 的所有结点值。
 *
 * 示例：树 [3,5,1,6,2,0,8,null,null,7,4]，target = 5，k = 2 => [7,4,1]
 *
 * 思路：先记录每个结点的父指针，再从目标结点向左、右、父三个方向做广度优先。
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

function findNode(root: TreeNode | null, value: number): TreeNode | null {
  if (!root || root.val === value) {
    return root;
  }
  return findNode(root.left, value) ?? findNode(root.right, value);
}

export function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  const parent = new Map<TreeNode, TreeNode | null>();
  const bind = (node: TreeNode | null, from: TreeNode | null): void => {
    if (!node) {
      return;
    }
    parent.set(node, from);
    bind(node.left, node);
    bind(node.right, node);
  };
  bind(root, null);
  if (!target) {
    return [];
  }

  const result: number[] = [];
  const seen = new Set<TreeNode>([target]);
  const queue: Array<{ node: TreeNode; dist: number }> = [{ node: target, dist: 0 }];
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) {
      break;
    }
    if (item.dist === k) {
      result.push(item.node.val);
      continue;
    }
    const neighbors = [item.node.left, item.node.right, parent.get(item.node) ?? null];
    for (const next of neighbors) {
      if (next && !seen.has(next)) {
        seen.add(next);
        queue.push({ node: next, dist: item.dist + 1 });
      }
    }
  }
  return result;
}

const root = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(distanceK(root, findNode(root, 5), 2));
