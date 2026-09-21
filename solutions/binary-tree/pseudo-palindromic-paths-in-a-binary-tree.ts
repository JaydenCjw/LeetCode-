/**
 * 二叉树中的伪回文路径
 * 难度：★★★☆☆
 * 从根到叶子的路径是伪回文路径，当且仅当至多有一个数字出现奇数次。返回这样的路径条数。结点值在 1 到 9。
 *
 * 示例：[2,3,1,3,1,null,1] => 2
 *
 * 思路：用位掩码记录每个数字出现次数的奇偶。叶子处掩码至多一个二进制位为 1。
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

export function pseudoPalindromicPaths(root: TreeNode | null): number {
  let count = 0;
  const walk = (node: TreeNode | null, mask: number): void => {
    if (!node) {
      return;
    }
    const next = mask ^ (1 << node.val);
    if (!node.left && !node.right) {
      if ((next & (next - 1)) === 0) {
        count += 1;
      }
      return;
    }
    walk(node.left, next);
    walk(node.right, next);
  };
  walk(root, 0);
  return count;
}

console.log(pseudoPalindromicPaths(buildTree([2, 3, 1, 3, 1, null, 1])));
