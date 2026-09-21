/**
 * 统计封闭岛屿的数目
 * 难度：★★★☆☆
 * 二维网格中 0 表示陆地、1 表示水。封闭岛屿是不接触网格边界的陆地连通块。
 *
 * 示例：
 * [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]] => 2
 *
 * 思路：先淹没与边界相连的陆地，再统计剩余陆地连通块。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function closedIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const flood = (row: number, col: number): void => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== 0) {
      return;
    }
    grid[row][col] = 1;
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
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        count++;
        flood(row, col);
      }
    }
  }
  return count;
}

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ]),
);
