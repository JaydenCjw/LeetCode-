/**
 * 情侣牵手
 * 难度：★★★★☆
 * 座位成对排列，情侣编号为 (0,1)、(2,3)……。每次可交换任意两人，返回让每对情侣相邻的最少交换次数。
 *
 * 示例：row = [0,2,1,3] => 1
 *
 * 思路：每个座位对上的两个人所属情侣编号做并查集。交换次数等于情侣数减去环（连通分量）数。
 * 时间 O(n α(n))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function minSwapsCouples(row: number[]): number {
  const couples = row.length / 2;
  const uf = new UnionFind(couples);
  for (let i = 0; i < row.length; i += 2) {
    uf.union(row[i] >> 1, row[i + 1] >> 1);
  }
  return couples - uf.count;
}

console.log(minSwapsCouples([0, 2, 1, 3]));
