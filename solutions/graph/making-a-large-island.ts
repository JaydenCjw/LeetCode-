/**
 * 最大人工岛
 * 难度：★★★★☆
 * 网格中最多把一个 0 变成 1，返回能得到的最大岛屿面积。
 *
 * 示例：[[1,0],[0,1]] => 3
 *
 * 思路：给每座岛染色并记录面积，再枚举每个 0，把相邻不同岛的面积相加。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function largestIsland(grid: number[][]): number {
  const n = grid.length;
  const color = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  const area = new Map<number, number>();
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let colorId = 1;

  const paint = (row: number, col: number, id: number): number => {
    if (row < 0 || col < 0 || row >= n || col >= n || grid[row][col] !== 1 || color[row][col] !== 0) {
      return 0;
    }
    color[row][col] = id;
    let size = 1;
    for (const [dr, dc] of dirs) {
      size += paint(row + dr, col + dc, id);
    }
    return size;
  };

  let best = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1 && color[row][col] === 0) {
        const size = paint(row, col, colorId);
        area.set(colorId, size);
        best = Math.max(best, size);
        colorId++;
      }
    }
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] !== 0) {
        continue;
      }
      const seen = new Set<number>();
      let size = 1;
      for (const [dr, dc] of dirs) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr < 0 || nc < 0 || nr >= n || nc >= n) {
          continue;
        }
        const id = color[nr][nc];
        if (id > 0 && !seen.has(id)) {
          seen.add(id);
          size += area.get(id) ?? 0;
        }
      }
      best = Math.max(best, size);
    }
  }
  return best;
}

console.log(
  largestIsland([
    [1, 0],
    [0, 1],
  ]),
);
