/**
 * 对称二叉树
 * 难度：★★☆☆☆
 * 检查二叉树是否轴对称。
 *
 * 示例：
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3  => true
 *
 * 思路：递归比较左右子树镜像。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function isSymmetric(root: TreeNode | null): boolean {
  const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };

  return isMirror(root, root);
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);
console.log(isSymmetric(root));
