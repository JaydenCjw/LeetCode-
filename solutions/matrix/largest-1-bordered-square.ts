/**
 * 最大的以 1 为边界的正方形
 * 难度：★★★☆☆
 * 在 0/1 网格中找最大的正方形，它的四条边都由 1 组成，内部可以是 0。返回该正方形的面积，不存在则返回 0。
 *
 * 示例：[[1,1,1],[1,0,1],[1,1,1]] => 9
 *
 * 思路：预处理每个格子向左、向上连续 1 的长度。枚举右下角和边长，四条边都能被连续 1 覆盖即可。
 * 时间 O(mn * min(m,n))，空间 O(mn)
 */

export function largest1BorderedSquare(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const left = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  const up = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1) {
        left[row][col] = (col > 0 ? left[row][col - 1] : 0) + 1;
        up[row][col] = (row > 0 ? up[row - 1][col] : 0) + 1;
      }
    }
  }
  let best = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const limit = Math.min(left[row][col], up[row][col]);
      for (let side = limit; side > best; side -= 1) {
        if (left[row - side + 1][col] >= side && up[row][col - side + 1] >= side) {
          best = side;
          break;
        }
      }
    }
  }
  return best * best;
}

console.log(
  largest1BorderedSquare([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
