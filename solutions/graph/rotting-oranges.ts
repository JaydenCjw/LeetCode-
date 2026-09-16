/**
 * 994. 腐烂的橘子
 * 0 空、1 新鲜、2 腐烂。每分钟腐烂橘子感染上下左右新鲜橘子，
 * 返回全部腐烂所需分钟；不可能则返回 -1。
 *
 * 示例：
 * [[2,1,1],[1,1,0],[0,1,1]] => 4
 *
 * 思路：多源 BFS，初始所有腐烂橘子入队。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: Array<[number, number]> = [];
  let fresh = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      } else if (grid[row][col] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) {
    return 0;
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let minutes = 0;

  while (queue.length > 0 && fresh > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift()!;
      for (const [dr, dc] of directions) {
        const nextRow = row + dr;
        const nextCol = col + dc;
        if (
          nextRow < 0 ||
          nextCol < 0 ||
          nextRow >= rows ||
          nextCol >= cols ||
          grid[nextRow][nextCol] !== 1
        ) {
          continue;
        }
        grid[nextRow][nextCol] = 2;
        fresh--;
        queue.push([nextRow, nextCol]);
      }
    }
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
