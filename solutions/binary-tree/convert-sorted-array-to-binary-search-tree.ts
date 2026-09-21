/**
 * 将有序数组转换为二叉搜索树
 * 难度：★☆☆☆☆
 * 升序数组转成高度平衡的二叉搜索树。
 *
 * 思路：每次取中点作为根，左右递归。
 * 时间 O(n)，空间 O(log n)
 */

import { TreeNode } from "@/types";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const build = (left: number, right: number): TreeNode | null => {
    if (left > right) {
      return null;
    }
    const mid = Math.floor((left + right) / 2);
    return new TreeNode(nums[mid], build(left, mid - 1), build(mid + 1, right));
  };
  return build(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
