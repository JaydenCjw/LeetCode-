/**
 * 矩阵的秩变换
 * 难度：★★★★★
 * 把矩阵中的每个元素换成它的秩：同行或同列中，所有更小元素的秩都严格更小，相等元素秩相同，且秩尽量小。
 *
 * 示例：[[1,2],[3,4]] => [[1,2],[2,3]]
 *
 * 思路：按值从小到大处理。同一取值在同行同列用并查集连成一组，秩为组内已有行、列最大秩再加一。
 * 时间 O(mn log (mn))，空间 O(mn)
 */

import { UnionFind } from "@/union-find";

export function matrixRankTransform(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const answer = Array.from({ length: rows }, () => new Array<number>(cols).fill(0));
  const positions = new Map<number, Array<[number, number]>>();
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value = matrix[row][col];
      const list = positions.get(value);
      if (list) {
        list.push([row, col]);
      } else {
        positions.set(value, [[row, col]]);
      }
    }
  }

  const rowMax = new Array<number>(rows).fill(0);
  const colMax = new Array<number>(cols).fill(0);
  const values = [...positions.keys()].sort((a, b) => a - b);
  for (const value of values) {
    const cells = positions.get(value) ?? [];
    const uf = new UnionFind(rows + cols);
    for (const [row, col] of cells) {
      uf.union(row, rows + col);
    }
    const groups = new Map<number, Array<[number, number]>>();
    for (const cell of cells) {
      const root = uf.find(cell[0]);
      const list = groups.get(root);
      if (list) {
        list.push(cell);
      } else {
        groups.set(root, [cell]);
      }
    }
    const rankOf = new Map<number, number>();
    for (const [root, group] of groups) {
      let rank = 0;
      for (const [row, col] of group) {
        rank = Math.max(rank, rowMax[row], colMax[col]);
      }
      rankOf.set(root, rank + 1);
    }
    for (const [row, col] of cells) {
      const rank = rankOf.get(uf.find(row)) ?? 1;
      answer[row][col] = rank;
      rowMax[row] = rank;
      colMax[col] = rank;
    }
  }
  return answer;
}

console.log(
  matrixRankTransform([
    [1, 2],
    [3, 4],
  ]),
);
