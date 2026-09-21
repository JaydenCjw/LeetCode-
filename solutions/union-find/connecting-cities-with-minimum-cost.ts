/**
 * 连通所有城市的最小费用
 * 难度：★★★☆☆
 * n 座城市编号 1 到 n，connections 是可修建的双向道路及费用。返回让所有城市连通的最小费用，不可能则 -1。
 *
 * 示例：n = 3，connections = [[1,2,5],[1,3,6],[2,3,1]] => 6
 *
 * 思路：按费用排序做 Kruskal 最小生成树，选满 n-1 条边即成功。
 * 时间 O(m log m)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function minimumCost(n: number, connections: number[][]): number {
  const edges = connections.slice().sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n + 1);
  let cost = 0;
  let used = 0;
  for (const [left, right, weight] of edges) {
    if (uf.union(left, right)) {
      cost += weight;
      used++;
    }
  }
  return used === n - 1 ? cost : -1;
}

console.log(
  minimumCost(3, [
    [1, 2, 5],
    [1, 3, 6],
    [2, 3, 1],
  ]),
);
