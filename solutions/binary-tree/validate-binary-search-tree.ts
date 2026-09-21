/**
 * 验证二叉搜索树
 * 难度：★★★☆☆
 * 判断二叉树是否为有效 BST：左 < 根 < 右，且左右子树均为 BST。
 *
 * 思路：递归时带上下界约束。
 * 时间 O(n)，空间 O(h)
 */

import { TreeNode } from "@/types";

export function isValidBST(root: TreeNode | null): boolean {
  const validate = (
    node: TreeNode | null,
    min: number | null,
    max: number | null,
  ): boolean => {
    if (!node) {
      return true;
    }
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      return false;
    }
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  };

  return validate(root, null, null);
}

const valid = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const invalid = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(valid));
console.log(isValidBST(invalid));
