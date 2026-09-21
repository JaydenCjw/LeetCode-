/**
 * 由斜杠划分区域
 * 难度：★★★☆☆
 * n x n 网格的每个格子是空格、'/' 或 '\\'。返回这些斜杠把网格分成的区域数。
 *
 * 示例：grid = [" /","/ "] => 2
 *
 * 思路：每个格子拆成 4 个三角形，按斜杠方向和相邻边用并查集合并，剩余集合数即区域数。
 * 时间 O(n^2 α(n))，空间 O(n^2)
 */

import { UnionFind } from "@/union-find";

export function regionsBySlashes(grid: string[]): number {
  const n = grid.length;
  const uf = new UnionFind(n * n * 4);
  const id = (row: number, col: number, part: number): number => (row * n + col) * 4 + part;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const cell = grid[row][col];
      if (cell === " ") {
        uf.union(id(row, col, 0), id(row, col, 1));
        uf.union(id(row, col, 1), id(row, col, 2));
        uf.union(id(row, col, 2), id(row, col, 3));
      } else if (cell === "/") {
        uf.union(id(row, col, 0), id(row, col, 3));
        uf.union(id(row, col, 1), id(row, col, 2));
      } else {
        uf.union(id(row, col, 0), id(row, col, 1));
        uf.union(id(row, col, 2), id(row, col, 3));
      }
      if (row + 1 < n) {
        uf.union(id(row, col, 2), id(row + 1, col, 0));
      }
      if (col + 1 < n) {
        uf.union(id(row, col, 1), id(row, col + 1, 3));
      }
    }
  }
  return uf.count;
}

console.log(regionsBySlashes([" /", "/ "]));
