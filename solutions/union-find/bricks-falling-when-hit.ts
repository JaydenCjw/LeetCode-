/**
 * 打砖块
 * 难度：★★★★☆
 * 砖块被击碎后，不再与顶行相连的砖会掉落。hits 依次给出打击位置，返回每次掉落的砖数（被击碎的那块不算）。
 *
 * 示例：grid = [[1,0,0,0],[1,1,1,0]]，hits = [[1,0]] => [2]
 *
 * 思路：先敲掉所有会被打中的砖，再逆序补回。补回后与天花板连通块增加的砖数减一就是掉落数。
 * 时间 O(hits * m * n) 量级，本例很小；空间 O(m*n)
 */

import { UnionFind } from "@/union-find";

export function hitBricks(grid: number[][], hits: number[][]): number[] {
  const rows = grid.length;
  const cols = grid[0].length;
  const board = grid.map((row) => row.slice());
  const erased = hits.map(([row, col]) => {
    if (board[row][col] === 1) {
      board[row][col] = 0;
      return true;
    }
    return false;
  });

  const top = rows * cols;
  const uf = new UnionFind(rows * cols + 1);
  const size = new Array<number>(rows * cols + 1).fill(1);
  size[top] = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const id = (row: number, col: number): number => row * cols + col;

  const unite = (left: number, right: number): void => {
    const rootLeft = uf.find(left);
    const rootRight = uf.find(right);
    if (rootLeft === rootRight) {
      return;
    }
    uf.union(left, right);
    const root = uf.find(left);
    size[root] = size[rootLeft] + size[rootRight];
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] !== 1) {
        continue;
      }
      if (row === 0) {
        unite(id(row, col), top);
      }
      if (row + 1 < rows && board[row + 1][col] === 1) {
        unite(id(row, col), id(row + 1, col));
      }
      if (col + 1 < cols && board[row][col + 1] === 1) {
        unite(id(row, col), id(row, col + 1));
      }
    }
  }

  const answer = new Array<number>(hits.length).fill(0);
  for (let i = hits.length - 1; i >= 0; i--) {
    if (!erased[i]) {
      continue;
    }
    const row = hits[i][0];
    const col = hits[i][1];
    const before = size[uf.find(top)];
    board[row][col] = 1;
    if (row === 0) {
      unite(id(row, col), top);
    }
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && board[nr][nc] === 1) {
        unite(id(row, col), id(nr, nc));
      }
    }
    const after = size[uf.find(top)];
    answer[i] = Math.max(0, after - before - 1);
  }
  return answer;
}

console.log(
  hitBricks(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
    ],
    [[1, 0]],
  ),
);
