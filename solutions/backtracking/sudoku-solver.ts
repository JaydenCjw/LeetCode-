/**
 * 解数独
 * 难度：★★★★☆
 * 填写 9x9 数独，使每行、每列、每个 3x3 宫都是 1..9。原地修改 board。
 *
 * 思路：回溯填空格，用行/列/宫位图剪枝。
 * 时间指数级，空间 O(1)
 */

export function solveSudoku(board: string[][]): void {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const cols = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value !== ".") {
        rows[row].add(value);
        cols[col].add(value);
        boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(value);
      }
    }
  }

  const dfs = (index: number): boolean => {
    if (index === 81) {
      return true;
    }
    const row = Math.floor(index / 9);
    const col = index % 9;
    if (board[row][col] !== ".") {
      return dfs(index + 1);
    }
    const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    for (let digit = 1; digit <= 9; digit++) {
      const value = String(digit);
      if (rows[row].has(value) || cols[col].has(value) || boxes[box].has(value)) {
        continue;
      }
      board[row][col] = value;
      rows[row].add(value);
      cols[col].add(value);
      boxes[box].add(value);
      if (dfs(index + 1)) {
        return true;
      }
      board[row][col] = ".";
      rows[row].delete(value);
      cols[col].delete(value);
      boxes[box].delete(value);
    }
    return false;
  };

  dfs(0);
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);
console.log(board[0].join(""));
