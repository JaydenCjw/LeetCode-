/**
 * 移除最多的同行或同列石头
 * 难度：★★★☆☆
 * 同行或同列的石头可以互相移除，直到不能再移。返回最多能移除的石头数。
 *
 * 思路：同行同列连通，每个连通块最终留 1 块，移除数 = 石头数 - 连通块数。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function removeStones(stones: number[][]): number {
  const uf = new UnionFind(stones.length);
  const rowRoot = new Map<number, number>();
  const colRoot = new Map<number, number>();

  stones.forEach(([row, col], index) => {
    const rowKey = row;
    const colKey = col + 10001;
    if (rowRoot.has(rowKey)) {
      uf.union(index, rowRoot.get(rowKey)!);
    } else {
      rowRoot.set(rowKey, index);
    }
    if (colRoot.has(colKey)) {
      uf.union(index, colRoot.get(colKey)!);
    } else {
      colRoot.set(colKey, index);
    }
  });

  const roots = new Set(stones.map((_, index) => uf.find(index)));
  return stones.length - roots.size;
}

console.log(removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]));
