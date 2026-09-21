/**
 * 岛屿数量 II
 * 难度：★★★★☆
 * 一开始 m x n 网格全是水。positions 依次把一格变成陆地，每次操作后返回当前岛屿数量。
 *
 * 示例：m = 3，n = 3，positions = [[0,0],[0,1],[1,2],[2,1]] => [1,1,2,3]
 *
 * 思路：动态加点。新陆地先计一座岛，再与四邻已有陆地做并查集合并。
 * 时间 O(k α(mn))，空间 O(mn)
 */

import { UnionFind } from "@/union-find";

export function numIslands2(m: number, n: number, positions: number[][]): number[] {
  const uf = new UnionFind(m * n);
  const land = Array.from({ length: m }, () => new Array<boolean>(n).fill(false));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const answer: number[] = [];
  let islands = 0;

  for (const position of positions) {
    const row = position[0];
    const col = position[1];
    if (land[row][col]) {
      answer.push(islands);
      continue;
    }
    land[row][col] = true;
    islands++;
    const id = row * n + col;
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nc < 0 || nr >= m || nc >= n || !land[nr][nc]) {
        continue;
      }
      if (uf.union(id, nr * n + nc)) {
        islands--;
      }
    }
    answer.push(islands);
  }
  return answer;
}

console.log(
  numIslands2(3, 3, [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ]),
);
