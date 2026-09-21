/**
 * 相似字符串组
 * 难度：★★★★☆
 * 若两个等长字符串相等，或交换其中恰好两个位置后相等，则它们相似。相似关系可传递。返回分组数。
 *
 * 示例：["tars","rats","arts","star"] => 2
 *
 * 思路：两两判断能否通过一次交换变成对方，能则并查集合并，最后返回连通分量数。
 * 时间 O(n^2 * L)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

function isSimilar(left: string, right: string): boolean {
  const diff: number[] = [];
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      diff.push(i);
      if (diff.length > 2) {
        return false;
      }
    }
  }
  if (diff.length === 0) {
    return true;
  }
  if (diff.length !== 2) {
    return false;
  }
  const i = diff[0];
  const j = diff[1];
  return left[i] === right[j] && left[j] === right[i];
}

export function numSimilarGroups(strs: string[]): number {
  const n = strs.length;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSimilar(strs[i], strs[j])) {
        uf.union(i, j);
      }
    }
  }
  return uf.count;
}

console.log(numSimilarGroups(["tars", "rats", "arts", "star"]));
