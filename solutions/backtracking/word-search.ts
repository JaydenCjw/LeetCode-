/**
 * 单词搜索
 * 难度：★★★☆☆
 * 在 m x n 字符网格中，判断能否通过相邻格子（上下左右）组成单词 word。
 * 同一格子不能重复使用。
 *
 * 示例：
 * board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * => true
 *
 * 思路：回溯 DFS，访问过的格子临时标记。
 * 时间 O(m*n*3^L)，空间 O(L)
 */

export function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (row: number, col: number, index: number): boolean => {
    if (index === word.length) {
      return true;
    }
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);
    board[row][col] = temp;
    return found;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
);
