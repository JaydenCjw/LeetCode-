/**
 * 找到最小生成树里的关键边和伪关键边
 * 难度：★★★★★
 * 无向带权图。关键边出现在所有最小生成树中，伪关键边出现在某些最小生成树中。返回两组边的下标。
 *
 * 示例：n = 5，edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
 * => [[0,1],[2,3,4,5]]
 *
 * 思路：先求最小生成树权值。某边被排除后权值变大则为关键边；否则强制选入仍能得到同样权值则为伪关键边。
 * 时间 O(m^2 α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
  const indexed = edges.map((edge, index) => [edge[0], edge[1], edge[2], index]);

  const spanningWeight = (force: number, ban: number): number => {
    const uf = new UnionFind(n);
    let weight = 0;
    let used = 0;
    if (force !== -1) {
      uf.union(edges[force][0], edges[force][1]);
      weight += edges[force][2];
      used++;
    }
    const sorted = indexed.slice().sort((a, b) => a[2] - b[2]);
    for (const edge of sorted) {
      if (edge[3] === ban || edge[3] === force) {
        continue;
      }
      if (uf.union(edge[0], edge[1])) {
        weight += edge[2];
        used++;
      }
    }
    return used === n - 1 ? weight : Number.POSITIVE_INFINITY;
  };

  const base = spanningWeight(-1, -1);
  const critical: number[] = [];
  const pseudo: number[] = [];
  for (let index = 0; index < edges.length; index++) {
    if (spanningWeight(-1, index) > base) {
      critical.push(index);
    } else if (spanningWeight(index, -1) === base) {
      pseudo.push(index);
    }
  }
  return [critical, pseudo];
}

console.log(
  findCriticalAndPseudoCriticalEdges(5, [
    [0, 1, 1],
    [1, 2, 1],
    [2, 3, 2],
    [0, 3, 2],
    [0, 4, 3],
    [3, 4, 3],
    [1, 4, 6],
  ]),
);
