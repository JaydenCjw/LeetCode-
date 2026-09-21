/**
 * 找出井字棋的获胜者
 * 难度：★☆☆☆☆
 * moves 按顺序记录落子，A 先手。返回 "A"、"B"、"Draw" 或 "Pending"。
 *
 * 示例：[[0,0],[2,0],[1,1],[2,1],[2,2]] => "A"（A 连成主对角线）
 *
 * 思路：在 3×3 棋盘上落子，每步检查当前玩家的行、列、对角线是否凑成 3 个。下满 9 步仍无人获胜则为平局。
 * 时间 O(1)，空间 O(1)
 */

function wins(board: number[][], player: number): boolean {
  for (let index = 0; index < 3; index += 1) {
    if (board[index][0] === player && board[index][1] === player && board[index][2] === player) {
      return true;
    }
    if (board[0][index] === player && board[1][index] === player && board[2][index] === player) {
      return true;
    }
  }
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  return board[0][2] === player && board[1][1] === player && board[2][0] === player;
}

export function tictactoe(moves: number[][]): string {
  const board = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => 0));
  for (let index = 0; index < moves.length; index += 1) {
    const player = index % 2 === 0 ? 1 : 2;
    const row = moves[index][0];
    const col = moves[index][1];
    board[row][col] = player;
    if (wins(board, player)) {
      return player === 1 ? "A" : "B";
    }
  }
  return moves.length === 9 ? "Draw" : "Pending";
}

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ]),
);
