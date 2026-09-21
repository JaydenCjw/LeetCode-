/**
 * 翻转矩阵后的得分
 * 难度：★★☆☆☆
 * 可以把任意一行或一列的 0/1 全部翻转。把每一行当成二进制数，返回能得到的最大行和。
 *
 * 示例：[[0,0,1,1],[1,0,1,0],[1,1,0,0]] => 39
 *
 * 思路：先翻转行，让最高位为 1。其余每一列若 0 比 1 多，就翻转该列。
 * 时间 O(mn)，空间 O(1) 额外（会修改副本的统计，不改原矩阵）
 */

export function matrixScore(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let score = rows * (1 << (cols - 1));
  for (let col = 1; col < cols; col += 1) {
    let ones = 0;
    for (let row = 0; row < rows; row += 1) {
      if (grid[row][col] === grid[row][0]) {
        ones += 1;
      }
    }
    ones = Math.max(ones, rows - ones);
    score += ones * (1 << (cols - 1 - col));
  }
  return score;
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ]),
);
