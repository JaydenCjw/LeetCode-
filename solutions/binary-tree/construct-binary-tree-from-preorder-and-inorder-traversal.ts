/**
 * 从前序与中序遍历序列构造二叉树
 * 给定前序、中序遍历结果（无重复值），构造二叉树并返回根。
 *
 * 示例：preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 *
 * 思路：前序首元素为根，中序划分左右子树后递归。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const indexByValue = new Map<number, number>();
  inorder.forEach((value, index) => indexByValue.set(value, index));

  const build = (
    preLeft: number,
    preRight: number,
    inLeft: number,
    inRight: number,
  ): TreeNode | null => {
    if (preLeft > preRight) {
      return null;
    }

    const rootValue = preorder[preLeft];
    const root = new TreeNode(rootValue);
    const inRoot = indexByValue.get(rootValue)!;
    const leftSize = inRoot - inLeft;

    root.left = build(preLeft + 1, preLeft + leftSize, inLeft, inRoot - 1);
    root.right = build(preLeft + leftSize + 1, preRight, inRoot + 1, inRight);
    return root;
  };

  return build(0, preorder.length - 1, 0, inorder.length - 1);
}

const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(root?.val, root?.left?.val, root?.right?.val);
