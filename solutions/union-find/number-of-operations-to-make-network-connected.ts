/**
 * 连通网络的操作次数
 * 难度：★★★☆☆
 * n 台电脑，connections 为已有网线。可以拆掉冗余边再接到别处。求使所有电脑连通的最少操作次数，不可能则 -1。
 *
 * 思路：边数至少 n-1；操作次数 = 连通块数 - 1。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1;
  }
  const uf = new UnionFind(n);
  for (const [a, b] of connections) {
    uf.union(a, b);
  }
  return uf.count - 1;
}

console.log(makeConnected(4, [[0, 1], [0, 2], [1, 2]]));
