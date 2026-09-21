/**
 * 二叉搜索树的最近公共祖先
 * 难度：★★☆☆☆
 * 给定 BST 中两个节点 p、q，返回它们的最近公共祖先。
 *
 * 思路：当前值大于两者则往左，小于两者则往右，否则就是答案。
 * 时间 O(h)，空间 O(1)
 */

import { TreeNode } from "@/types";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  let current = root;
  while (current) {
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else {
      return current;
    }
  }
  return null;
}

const root = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4)), new TreeNode(8));
console.log(lowestCommonAncestor(root, root.left!, root.right!)?.val);
