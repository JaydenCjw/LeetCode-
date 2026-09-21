/**
 * 以图判树
 * 难度：★★☆☆☆
 * 无向图有 n 个节点和若干边，判断它是否是一棵树：连通且无环。
 *
 * 示例：n = 5，edges = [[0,1],[0,2],[0,3],[1,4]] => true
 *
 * 思路：树恰有 n-1 条边，且并查集合并时不会遇到已连通的两端。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) {
    return false;
  }
  const uf = new UnionFind(n);
  for (const [left, right] of edges) {
    if (!uf.union(left, right)) {
      return false;
    }
  }
  return uf.count === 1;
}

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]),
);
