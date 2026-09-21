/**
 * 最接近的二叉搜索树值
 * 难度：★★☆☆☆
 * 给定目标值（可以是小数），返回树中与它最接近的整数结点值。距离相同则取更小的值。
 *
 * 示例：root = [4,2,5,1,3]，target = 3.714286 => 4
 *
 * 思路：沿二叉搜索路径走，随时更新更接近的结点。
 * 时间 O(h)，空间 O(1)
 */

import { TreeNode } from "@/types";

export function closestValue(root: TreeNode | null, target: number): number {
  let closest = root?.val ?? 0;
  let current = root;
  while (current) {
    const currentGap = Math.abs(current.val - target);
    const bestGap = Math.abs(closest - target);
    if (currentGap < bestGap || (currentGap === bestGap && current.val < closest)) {
      closest = current.val;
    }
    current = target < current.val ? current.left : current.right;
  }
  return closest;
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(5),
);
console.log(closestValue(root, 3.714286));
