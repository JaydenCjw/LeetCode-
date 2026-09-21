/**
 * 好路径的数目
 * 难度：★★★★☆
 * 树上一条好路径的起点和终点值相等，且路径上没有比它们更大的值。返回好路径数量（单点也算）。
 *
 * 示例：vals = [1,3,2,1,3]，edges = [[0,1],[0,2],[2,3],[2,4]] => 6
 *
 * 思路：按节点值从小到大加入。连向已加入的邻居时，用并查集统计两端同值节点数并累加配对数。
 * 时间 O(n log n)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function numberOfGoodPaths(vals: number[], edges: number[][]): number {
  const n = vals.length;
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [left, right] of edges) {
    graph[left].push(right);
    graph[right].push(left);
  }

  const uf = new UnionFind(n);
  const count = Array.from({ length: n }, (_, index) => new Map<number, number>([[vals[index], 1]]));
  const order = Array.from({ length: n }, (_, index) => index).sort((a, b) => vals[a] - vals[b]);
  let answer = n;

  for (const node of order) {
    for (const next of graph[node]) {
      if (vals[next] > vals[node]) {
        continue;
      }
      const left = uf.find(node);
      const right = uf.find(next);
      if (left === right) {
        continue;
      }
      const leftCount = count[left].get(vals[node]) ?? 0;
      const rightCount = count[right].get(vals[node]) ?? 0;
      answer += leftCount * rightCount;
      uf.union(left, right);
      const root = uf.find(left);
      const other = root === left ? right : left;
      for (const [value, times] of count[other]) {
        count[root].set(value, (count[root].get(value) ?? 0) + times);
      }
    }
  }
  return answer;
}

console.log(
  numberOfGoodPaths(
    [1, 3, 2, 1, 3],
    [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ],
  ),
);
