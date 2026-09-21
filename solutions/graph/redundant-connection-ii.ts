/**
 * 冗余连接 II
 * 难度：★★★★☆
 * 有根树多了一条有向边。删掉一条边使图重新成为有根树，返回该边；多解取输入中靠后的。
 *
 * 示例：edges = [[1,2],[1,3],[2,3]] => [2,3]
 *
 * 思路：入度为 2 的点产生两条候选边；跳过后出现的那条再查环，仍有环则删前一条。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function findRedundantDirectedConnection(edges: number[][]): number[] {
  const n = edges.length;
  const parent = new Array<number>(n + 1).fill(0);
  let first: number[] | null = null;
  let second: number[] | null = null;

  for (const edge of edges) {
    const from = edge[0];
    const to = edge[1];
    if (parent[to] === 0) {
      parent[to] = from;
    } else {
      first = [parent[to], to];
      second = [from, to];
    }
  }

  const uf = new UnionFind(n + 1);
  for (const edge of edges) {
    const from = edge[0];
    const to = edge[1];
    if (second && from === second[0] && to === second[1]) {
      continue;
    }
    if (!uf.union(from, to)) {
      return first ?? [from, to];
    }
  }
  return second ?? [];
}

console.log(
  findRedundantDirectedConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
);
