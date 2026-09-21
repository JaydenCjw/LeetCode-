/**
 * 何时所有人成为朋友
 * 难度：★★★☆☆
 * 一开始有 n 个人互不相识。logs[i] = [timestamp, x, y] 表示两人成为朋友，友谊可传递。返回所有人连通的最早时间，不可能则返回 -1。
 *
 * 示例：n = 6，logs 按下标 0 到 5 给出友谊，最早时刻为 20190301。
 *
 * 思路：按时间排序后并查集合并，连通分量降为 1 时返回该时间。
 * 时间 O(m log m)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function earliestAcq(logs: number[][], n: number): number {
  const ordered = logs.slice().sort((a, b) => a[0] - b[0]);
  const uf = new UnionFind(n);
  for (const log of ordered) {
    uf.union(log[1], log[2]);
    if (uf.count === 1) {
      return log[0];
    }
  }
  return -1;
}

console.log(
  earliestAcq(
    [
      [20190101, 0, 1],
      [20190104, 3, 4],
      [20190107, 2, 3],
      [20190211, 1, 5],
      [20190224, 2, 4],
      [20190301, 0, 3],
      [20190312, 1, 2],
      [20190322, 4, 5],
    ],
    6,
  ),
);
