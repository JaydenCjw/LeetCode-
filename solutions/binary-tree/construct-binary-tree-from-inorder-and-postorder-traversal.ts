/**
 * 从中序与后序遍历序列构造二叉树
 * 难度：★★★☆☆
 * 根据中序和后序遍历结果重建二叉树（节点值互不相同）。
 *
 * 思路：后序最后一个是根，在中序中划分左右子树递归。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const index = new Map(inorder.map((value, i) => [value, i]));

  const build = (inLeft: number, inRight: number, postLeft: number, postRight: number): TreeNode | null => {
    if (inLeft > inRight) {
      return null;
    }
    const rootVal = postorder[postRight];
    const mid = index.get(rootVal)!;
    const leftSize = mid - inLeft;
    return new TreeNode(
      rootVal,
      build(inLeft, mid - 1, postLeft, postLeft + leftSize - 1),
      build(mid + 1, inRight, postLeft + leftSize, postRight - 1),
    );
  };

  return build(0, inorder.length - 1, 0, postorder.length - 1);
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
