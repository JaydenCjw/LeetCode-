/**
 * 二叉树的所有路径
 * 难度：★☆☆☆☆
 * 返回所有从根到叶子的路径，结点之间用 "->" 连接。
 *
 * 示例：[1,2,3,null,5] => ["1->2->5","1->3"]
 *
 * 思路：深度优先，走到叶子时把路径拼成字符串。
 * 时间 O(n^2)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];
  const walk = (node: TreeNode | null, path: string): void => {
    if (!node) {
      return;
    }
    const next = path.length === 0 ? `${node.val}` : `${path}->${node.val}`;
    if (!node.left && !node.right) {
      paths.push(next);
      return;
    }
    walk(node.left, next);
    walk(node.right, next);
  };
  walk(root, "");
  return paths;
}

const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3));
console.log(binaryTreePaths(root));
