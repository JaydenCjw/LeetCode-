/**
 * 统计无向图中无法互相到达的点对数
 * 难度：★★★☆☆
 * 无向图有 n 个节点。返回不连通的点对数量。
 *
 * 示例：n = 7，edges = [[0,2],[0,5],[2,4],[1,6],[5,4]] => 14
 *
 * 思路：并查集求出各连通块大小，不同块之间的点对即不可达。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function countPairs(n: number, edges: number[][]): number {
  const uf = new UnionFind(n);
  for (const [left, right] of edges) {
    uf.union(left, right);
  }
  const size = new Array<number>(n).fill(0);
  for (let node = 0; node < n; node++) {
    size[uf.find(node)]++;
  }
  let answer = 0;
  let seen = 0;
  for (let node = 0; node < n; node++) {
    if (uf.find(node) !== node) {
      continue;
    }
    answer += size[node] * seen;
    seen += size[node];
  }
  return answer;
}

console.log(
  countPairs(7, [
    [0, 2],
    [0, 5],
    [2, 4],
    [1, 6],
    [5, 4],
  ]),
);
