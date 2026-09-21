/**
 * 统计参与通信的服务器（并查集）
 * 难度：★★★☆☆
 * 网格中 1 表示服务器。若同一行或同一列还有另一台服务器，则它们可以通信。返回能够通信的服务器数量。
 *
 * 示例：[[1,0],[1,1]] => 3
 *
 * 思路：同一行、同一列的服务器用并查集连起来，统计所在连通块大小大于 1 的服务器。
 * 时间 O(m*n)，空间 O(m*n)
 */

import { UnionFind } from "@/union-find";

export function countServers(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const uf = new UnionFind(rows * cols);
  const servers: number[] = [];

  for (let row = 0; row < rows; row++) {
    let previous = -1;
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== 1) {
        continue;
      }
      const id = row * cols + col;
      servers.push(id);
      if (previous !== -1) {
        uf.union(previous, id);
      }
      previous = id;
    }
  }
  for (let col = 0; col < cols; col++) {
    let previous = -1;
    for (let row = 0; row < rows; row++) {
      if (grid[row][col] !== 1) {
        continue;
      }
      const id = row * cols + col;
      if (previous !== -1) {
        uf.union(previous, id);
      }
      previous = id;
    }
  }

  const size = new Array<number>(rows * cols).fill(0);
  for (const id of servers) {
    size[uf.find(id)]++;
  }
  let answer = 0;
  for (const id of servers) {
    if (size[uf.find(id)] > 1) {
      answer++;
    }
  }
  return answer;
}

console.log(
  countServers([
    [1, 0],
    [1, 1],
  ]),
);
