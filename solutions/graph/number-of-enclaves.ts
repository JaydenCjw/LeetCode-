/**
 * 飞地的数量
 * 难度：★★★☆☆
 * 网格中 1 为陆地、0 为水。飞地是无法走到边界的陆地格子，返回其数量。
 *
 * 示例：[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]] => 3
 *
 * 思路：从边界陆地出发淹没所有能离岛的陆地，再统计剩余的 1。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function numEnclaves(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const flood = (row: number, col: number): void => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== 1) {
      return;
    }
    grid[row][col] = 0;
    for (const [dr, dc] of dirs) {
      flood(row + dr, col + dc);
    }
  };

  for (let row = 0; row < rows; row++) {
    flood(row, 0);
    flood(row, cols - 1);
  }
  for (let col = 0; col < cols; col++) {
    flood(0, col);
    flood(rows - 1, col);
  }

  let count = 0;
  for (const row of grid) {
    for (const cell of row) {
      count += cell;
    }
  }
  return count;
}

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]),
);
