/**
 * 优化水资源分配
 * 难度：★★★★☆
 * n 座房子可以打井或铺管道。wells[i] 是给房子 i+1 打井的费用，pipes 是双向管道费用。让每座房子都有水的最小费用。
 *
 * 示例：n = 3，wells = [1,2,2]，pipes = [[1,2,1],[2,3,1]] => 3
 *
 * 思路：虚拟水源与每座房子以打井费用相连，再对全部边做 Kruskal 最小生成树。
 * 时间 O(m log m)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function minCostToSupplyWater(n: number, wells: number[], pipes: number[][]): number {
  const edges: number[][] = [];
  for (let house = 1; house <= n; house++) {
    edges.push([0, house, wells[house - 1]]);
  }
  for (const pipe of pipes) {
    edges.push(pipe);
  }
  edges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n + 1);
  let cost = 0;
  for (const [left, right, weight] of edges) {
    if (uf.union(left, right)) {
      cost += weight;
    }
  }
  return cost;
}

console.log(
  minCostToSupplyWater(
    3,
    [1, 2, 2],
    [
      [1, 2, 1],
      [2, 3, 1],
    ],
  ),
);
