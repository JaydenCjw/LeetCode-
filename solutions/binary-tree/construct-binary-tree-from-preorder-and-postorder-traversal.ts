/**
 * 从前序与后序遍历序列构造二叉树
 * 难度：★★★☆☆
 * 根据前序和后序还原一棵二叉树。答案可能不唯一，返回任意一棵合法树。
 *
 * 示例：pre = [1,2,4,5,3,6,7]，post = [4,5,2,6,7,3,1]，根值为 1
 *
 * 思路：前序第一个是根，下一个是左子树的根。在后序里定位它，从而切出左右子树区间。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  const postIndex = new Map<number, number>();
  postorder.forEach((value, index) => {
    postIndex.set(value, index);
  });

  const build = (preLeft: number, preRight: number, postLeft: number): TreeNode | null => {
    if (preLeft > preRight) {
      return null;
    }
    const root = new TreeNode(preorder[preLeft]);
    if (preLeft === preRight) {
      return root;
    }
    const leftRoot = preorder[preLeft + 1];
    const leftPost = postIndex.get(leftRoot) ?? postLeft;
    const leftSize = leftPost - postLeft + 1;
    root.left = build(preLeft + 1, preLeft + leftSize, postLeft);
    root.right = build(preLeft + leftSize + 1, preRight, leftPost + 1);
    return root;
  };

  return build(0, preorder.length - 1, 0);
}

const root = constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
console.log(root?.val ?? null);
