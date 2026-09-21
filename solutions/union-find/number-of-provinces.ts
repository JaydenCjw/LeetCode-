/**
 * 省份数量
 * n x n 矩阵 isConnected，isConnected[i][j] = 1 表示城市 i、j 直接相连。
 * 返回省份数量（连通分量数）。
 *
 * 示例：[[1,1,0],[1,1,0],[0,0,1]] => 2
 *
 * 思路：并查集合并相连城市。
 * 时间 O(n^2 α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.count;
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
);
