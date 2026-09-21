/**
 * 被围绕的区域
 * 把所有被 'X' 围绕的 'O' 捕获为 'X'；边界连通的 'O' 不捕获。
 *
 * 思路：从边界 'O' DFS 标记，再把未标记 'O' 改为 'X'。
 * 时间 O(m*n)，空间 O(m*n)
 */

export function solve(board: string[][]): void {
  if (board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  const dfs = (row: number, col: number): void => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== "O") {
      return;
    }
    board[row][col] = "#";
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < rows; row++) {
    dfs(row, 0);
    dfs(row, cols - 1);
  }
  for (let col = 0; col < cols; col++) {
    dfs(0, col);
    dfs(rows - 1, col);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === "O") board[row][col] = "X";
      else if (board[row][col] === "#") board[row][col] = "O";
    }
  }
}

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
solve(board);
console.log(board);
