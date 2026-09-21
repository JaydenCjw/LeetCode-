/**
 * 无向图中连通分量的数目
 * 难度：★★☆☆☆
 * n 个节点（0 到 n-1）和若干无向边，返回连通分量个数。
 *
 * 示例：n = 5，edges = [[0,1],[1,2],[3,4]] => 2
 *
 * 思路：并查集合并每条边，剩余集合数即连通分量。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function countComponents(n: number, edges: number[][]): number {
  const uf = new UnionFind(n);
  for (const [left, right] of edges) {
    uf.union(left, right);
  }
  return uf.count;
}

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ]),
);
