/**
 * 不同的二叉搜索树 II
 * 难度：★★★☆☆
 * 用 1 到 n 构造所有结构不同的二叉搜索树，返回树的个数即可验证。n = 3 时应有 5 棵。
 *
 * 示例：n = 3 => 5
 *
 * 思路：枚举根 i，左子树用 1..i-1，右子树用 i+1..n，笛卡尔积拼出所有树。
 * 时间与卡特兰数同阶，空间同阶
 */

import { TreeNode } from "@/types";

export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) {
    return [];
  }
  const build = (start: number, end: number): Array<TreeNode | null> => {
    if (start > end) {
      return [null];
    }
    const trees: Array<TreeNode | null> = [];
    for (let value = start; value <= end; value += 1) {
      const lefts = build(start, value - 1);
      const rights = build(value + 1, end);
      for (const left of lefts) {
        for (const right of rights) {
          trees.push(new TreeNode(value, left, right));
        }
      }
    }
    return trees;
  };
  return build(1, n);
}

console.log(generateTrees(3).length);
