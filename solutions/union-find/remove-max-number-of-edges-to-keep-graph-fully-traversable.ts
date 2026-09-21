/**
 * 保证图可完全遍历
 * 难度：★★★★☆
 * n 个节点。type 1 只有 Alice 能走，type 2 只有 Bob 能走，type 3 两人都能走。删除最多的边，仍让两人都能遍历全图。返回可删边数，不可能则 -1。
 *
 * 示例：n = 4，edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]] => 2
 *
 * 思路：两套并查集。先尽量使用公共边，再分别补 Alice 和 Bob 的边，总边数减去必要边数。
 * 时间 O(m α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  const alice = new UnionFind(n);
  const bob = new UnionFind(n);
  let used = 0;

  for (const [type, left, right] of edges) {
    if (type !== 3) {
      continue;
    }
    const mergedAlice = alice.union(left - 1, right - 1);
    const mergedBob = bob.union(left - 1, right - 1);
    if (mergedAlice || mergedBob) {
      used++;
    }
  }
  for (const [type, left, right] of edges) {
    if (type === 1 && alice.union(left - 1, right - 1)) {
      used++;
    } else if (type === 2 && bob.union(left - 1, right - 1)) {
      used++;
    }
  }
  if (alice.count !== 1 || bob.count !== 1) {
    return -1;
  }
  return edges.length - used;
}

console.log(
  maxNumEdgesToRemove(4, [
    [3, 1, 2],
    [3, 2, 3],
    [1, 1, 3],
    [1, 2, 4],
    [1, 1, 2],
    [2, 3, 4],
  ]),
);
