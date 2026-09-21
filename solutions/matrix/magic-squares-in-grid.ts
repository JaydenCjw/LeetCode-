/**
 * 矩阵中的幻方
 * 难度：★★☆☆☆
 * 统计网格中 3×3 幻方的个数。幻方由 1 到 9 各出现一次，每行、每列、两条对角线之和都是 15。
 *
 * 示例：[[4,3,8,4],[9,5,1,9],[2,7,6,2]] => 1
 *
 * 思路：枚举每个 3×3 窗口。中心必须是 5，且数字互异落在 1..9，行列对角线和为 15。
 * 时间 O(mn)，空间 O(1)
 */

function isMagic(grid: number[][], row: number, col: number): boolean {
  if (grid[row + 1][col + 1] !== 5) {
    return false;
  }
  const seen = Array.from({ length: 10 }, () => false);
  for (let dr = 0; dr < 3; dr += 1) {
    for (let dc = 0; dc < 3; dc += 1) {
      const value = grid[row + dr][col + dc];
      if (value < 1 || value > 9 || seen[value]) {
        return false;
      }
      seen[value] = true;
    }
  }
  const lines = [
    grid[row][col] + grid[row][col + 1] + grid[row][col + 2],
    grid[row + 1][col] + grid[row + 1][col + 1] + grid[row + 1][col + 2],
    grid[row + 2][col] + grid[row + 2][col + 1] + grid[row + 2][col + 2],
    grid[row][col] + grid[row + 1][col] + grid[row + 2][col],
    grid[row][col + 1] + grid[row + 1][col + 1] + grid[row + 2][col + 1],
    grid[row][col + 2] + grid[row + 1][col + 2] + grid[row + 2][col + 2],
    grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2],
    grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col],
  ];
  return lines.every((sum) => sum === 15);
}

export function numMagicSquaresInside(grid: number[][]): number {
  if (grid.length < 3 || grid[0].length < 3) {
    return 0;
  }
  let count = 0;
  for (let row = 0; row + 2 < grid.length; row += 1) {
    for (let col = 0; col + 2 < grid[0].length; col += 1) {
      if (isMagic(grid, row, col)) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(
  numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ]),
);
