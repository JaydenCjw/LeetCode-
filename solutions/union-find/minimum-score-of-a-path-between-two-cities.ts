/**
 * 两个城市间路径的最小分数
 * 难度：★★★☆☆
 * 城市 1 到 n 至少有一条路径。一条路径的分数是其上最小边权。返回所有路径中最小的分数。路径可以重复经过城市。
 *
 * 示例：n = 4，roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]] => 5
 *
 * 思路：非简单路径可以绕进连通块里的任意边，所以答案是城市 1 所在连通块中的最小边权。
 * 时间 O(m α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function minScore(n: number, roads: number[][]): number {
  const uf = new UnionFind(n + 1);
  for (const road of roads) {
    uf.union(road[0], road[1]);
  }
  const root = uf.find(1);
  let answer = Number.POSITIVE_INFINITY;
  for (const road of roads) {
    if (uf.find(road[0]) === root) {
      answer = Math.min(answer, road[2]);
    }
  }
  return answer;
}

console.log(
  minScore(4, [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ]),
);
