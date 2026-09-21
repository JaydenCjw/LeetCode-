/**
 * 甲板上的战舰
 * 难度：★★☆☆☆
 * 棋盘上 X 表示战舰，. 表示空海。战舰只横放或竖放，互不相邻。返回战舰数量。
 *
 * 示例：[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] => 2
 *
 * 思路：只统计每艘战舰的船头，即左边和上边都不是 X 的 X。
 * 时间 O(mn)，空间 O(1)
 */

export function countBattleships(board: string[][]): number {
  let ships = 0;
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[0].length; col += 1) {
      if (board[row][col] !== "X") {
        continue;
      }
      if (row > 0 && board[row - 1][col] === "X") {
        continue;
      }
      if (col > 0 && board[row][col - 1] === "X") {
        continue;
      }
      ships += 1;
    }
  }
  return ships;
}

console.log(
  countBattleships([
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"],
  ]),
);
