/**
 * 找树左下角的值
 * 难度：★★☆☆☆
 * 返回二叉树最底层、最左边的结点值。
 *
 * 示例：[2,1,3] => 1；[1,2,3,4,null,5,6,null,null,7] => 7
 *
 * 思路：层序遍历，每一层第一个结点覆盖答案，最后一层的第一个就是左下角。
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

export function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let answer = root.val;
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      if (i === 0) {
        answer = node.val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return answer;
}

console.log(findBottomLeftValue(buildTree([2, 1, 3])));
console.log(findBottomLeftValue(buildTree([1, 2, 3, 4, null, 5, 6, null, null, 7])));
