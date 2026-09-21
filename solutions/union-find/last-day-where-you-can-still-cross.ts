/**
 * 可以穿过矩阵的最后一天
 * 难度：★★★★☆
 * row x col 矩阵最初可走。cells[i] 表示第 i+1 天被水淹没的格子（1 起编）。返回仍能从最上行走到最下行的最后一天。
 *
 * 示例：row = 2，col = 2，cells = [[1,1],[2,1],[1,2],[2,2]] => 2
 *
 * 思路：二分天数。把未淹没的陆地与虚拟上下边界做并查集，判断上下是否仍连通。
 * 时间 O(row*col log (row*col))，空间 O(row*col)
 */

import { UnionFind } from "@/union-find";

export function latestDayToCross(row: number, col: number, cells: number[][]): number {
  const top = row * col;
  const bottom = top + 1;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const canCross = (day: number): boolean => {
    const flooded = Array.from({ length: row }, () => new Array<boolean>(col).fill(false));
    for (let i = 0; i < day; i++) {
      flooded[cells[i][0] - 1][cells[i][1] - 1] = true;
    }
    const uf = new UnionFind(row * col + 2);
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        if (flooded[r][c]) {
          continue;
        }
        const id = r * col + c;
        if (r === 0) {
          uf.union(id, top);
        }
        if (r === row - 1) {
          uf.union(id, bottom);
        }
        for (const [dr, dc] of dirs) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nc >= 0 && nr < row && nc < col && !flooded[nr][nc]) {
            uf.union(id, nr * col + nc);
          }
        }
      }
    }
    return uf.connected(top, bottom);
  };

  let low = 0;
  let high = cells.length;
  let answer = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canCross(mid)) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return answer;
}

console.log(
  latestDayToCross(2, 2, [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ]),
);
