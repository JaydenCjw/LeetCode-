/**
 * N 皇后
 * 难度：★★★★☆
 * 在 n×n 棋盘放置 n 个皇后，使其不能互相攻击，返回所有不同解法的棋盘布局。
 *
 * 示例：n = 4 => [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 *
 * 思路：回溯，用列/主对角/副对角占用集合剪枝。
 * 时间指数级，空间 O(n)
 */

export function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board = Array.from({ length: n }, () => new Array<string>(n).fill("."));
  const cols = new Set<number>();
  const diag1 = new Set<number>();
  const diag2 = new Set<number>();

  const dfs = (row: number): void => {
    if (row === n) {
      result.push(board.map((line) => line.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
        continue;
      }
      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      dfs(row + 1);
      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  };

  dfs(0);
  return result;
}

console.log(solveNQueens(4));
