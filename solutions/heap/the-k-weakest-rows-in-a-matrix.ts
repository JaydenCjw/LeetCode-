/**
 * 矩阵中战斗力最弱的 K 行
 * 难度：★★☆☆☆
 * 每行的 1 都排在 0 前面。战斗力是 1 的个数。返回最弱的 k 行下标，先比战斗力，再比行号。
 *
 * 示例：k = 3 => [2,0,3]
 *
 * 思路：小根堆按战斗力和行号排序，弹出前 k 个。
 * 时间 O(m n + m log m)，空间 O(m)
 */

import { Heap } from "@/heap";

export function kWeakestRows(mat: number[][], k: number): number[] {
  const heap = new Heap<[number, number]>(
    (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]),
  );
  mat.forEach((row, index) => {
    const soldiers = row.reduce((sum, cell) => sum + cell, 0);
    heap.push([soldiers, index]);
  });
  const result: number[] = [];
  for (let i = 0; i < k && heap.size > 0; i += 1) {
    result.push(heap.pop()[1]);
  }
  return result;
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3,
  ),
);
