/**
 * 车的可用捕获量
 * 难度：★★☆☆☆
 * 8×8 棋盘上有一个白车 R 和若干黑卒 p，空位是 .。车按国际象棋走直线，路上有棋子就停。返回车能直接吃到的卒的数量。
 *
 * 示例：R 在 (2,3)，上方、右方、下方各有一个可吃的卒，答案为 3。
 *
 * 思路：从车的位置向四个方向扫描，遇到卒计数并停止，遇到边界停止。
 * 时间 O(1)（棋盘固定 8×8），空间 O(1)
 */

export function numRookCaptures(board: string[][]): number {
  let row = 0;
  let col = 0;
  for (let r = 0; r < 8; r += 1) {
    for (let c = 0; c < 8; c += 1) {
      if (board[r][c] === "R") {
        row = r;
        col = c;
      }
    }
  }
  const dirs: Array<[number, number]> = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let captures = 0;
  for (const [dr, dc] of dirs) {
    let r = row + dr;
    let c = col + dc;
    while (r >= 0 && r < 8 && c >= 0 && c < 8) {
      if (board[r][c] === "p") {
        captures += 1;
        break;
      }
      if (board[r][c] !== ".") {
        break;
      }
      r += dr;
      c += dc;
    }
  }
  return captures;
}

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ]),
);
