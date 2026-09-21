/**
 * 冗余连接
 * 树加了一条边变成有环图，返回使图变回树应删除的那条边（若多解取最后出现的）。
 *
 * 示例：edges = [[1,2],[1,3],[2,3]] => [2,3]
 *
 * 思路：并查集，第一条使两点已连通的边即为冗余边。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function findRedundantConnection(edges: number[][]): number[] {
  const uf = new UnionFind(edges.length + 1);

  for (const [a, b] of edges) {
    if (!uf.union(a, b)) {
      return [a, b];
    }
  }

  return [];
}

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
);
