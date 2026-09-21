/**
 * 有效的数独
 * 难度：★★☆☆☆
 * 判断 9x9 数独当前填充是否有效（不要求已填完）。同行、同列、同宫不能重复。
 *
 * 思路：行、列、宫各用集合记录已出现数字。
 * 时间 O(1)，空间 O(1)
 */

export function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const cols = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value === ".") {
        continue;
      }
      const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (rows[row].has(value) || cols[col].has(value) || boxes[box].has(value)) {
        return false;
      }
      rows[row].add(value);
      cols[col].add(value);
      boxes[box].add(value);
    }
  }
  return true;
}

console.log(isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]));
