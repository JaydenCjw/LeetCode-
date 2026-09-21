/**
 * 统计完全连通分量的数量
 * 难度：★★★☆☆
 * 无向图中，若一个连通分量里每对节点都有边，则它是完全连通分量。返回这种分量的数量。
 *
 * 示例：n = 6，edges = [[0,1],[0,2],[1,2],[3,4]] => 3
 *
 * 思路：并查集求出每个分量的点数和边数，边数等于 size*(size-1)/2 即为团。
 * 时间 O(n+m)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function countCompleteComponents(n: number, edges: number[][]): number {
  const uf = new UnionFind(n);
  for (const [left, right] of edges) {
    uf.union(left, right);
  }
  const nodes = new Array<number>(n).fill(0);
  const edgeCount = new Array<number>(n).fill(0);
  for (let node = 0; node < n; node++) {
    nodes[uf.find(node)]++;
  }
  for (const [left] of edges) {
    edgeCount[uf.find(left)]++;
  }
  let answer = 0;
  for (let node = 0; node < n; node++) {
    if (uf.find(node) !== node) {
      continue;
    }
    const size = nodes[node];
    if (edgeCount[node] === (size * (size - 1)) / 2) {
      answer++;
    }
  }
  return answer;
}

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ]),
);
