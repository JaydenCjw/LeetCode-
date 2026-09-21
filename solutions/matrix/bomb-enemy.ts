/**
 * 炸弹敌人
 * 难度：★★☆☆☆
 * 网格中 0 是空地、E 是敌人、W 是墙。在一块空地上放炸弹，可炸死同一行、同一列上直到墙为止的全部敌人。返回最多能炸死多少敌人。
 *
 * 示例：[["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]] => 3
 *
 * 思路：按墙把每行、每列切成段，预先数出每段敌人数。空地的答案是所在行段与列段之和。
 * 时间 O(mn)，空间 O(n)
 */

export function maxKilledEnemies(grid: string[][]): number {
  const rows = grid.length;
  if (rows === 0) {
    return 0;
  }
  const cols = grid[0].length;
  const colHits = Array.from({ length: cols }, () => 0);
  let best = 0;
  let rowHits = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (col === 0 || grid[row][col - 1] === "W") {
        rowHits = 0;
        for (let scan = col; scan < cols && grid[row][scan] !== "W"; scan += 1) {
          if (grid[row][scan] === "E") {
            rowHits += 1;
          }
        }
      }
      if (row === 0 || grid[row - 1][col] === "W") {
        colHits[col] = 0;
        for (let scan = row; scan < rows && grid[scan][col] !== "W"; scan += 1) {
          if (grid[scan][col] === "E") {
            colHits[col] += 1;
          }
        }
      }
      if (grid[row][col] === "0") {
        best = Math.max(best, rowHits + colHits[col]);
      }
    }
  }
  return best;
}

console.log(
  maxKilledEnemies([
    ["0", "E", "0", "0"],
    ["E", "0", "W", "E"],
    ["0", "E", "0", "0"],
  ]),
);
