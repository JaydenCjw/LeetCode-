/**
 * N 皇后 II
 * 难度：★★★☆☆
 * 返回 n 皇后问题的不同解法数量。
 *
 * 思路：按行放置，列、主对角线、副对角线用集合判冲突。
 * 时间 O(n!)，空间 O(n)
 */

export function totalNQueens(n: number): number {
  const columns = new Set<number>();
  const diagonals = new Set<number>();
  const antiDiagonals = new Set<number>();
  let count = 0;

  const dfs = (row: number): void => {
    if (row === n) {
      count++;
      return;
    }
    for (let col = 0; col < n; col++) {
      const diagonal = row - col;
      const anti = row + col;
      if (columns.has(col) || diagonals.has(diagonal) || antiDiagonals.has(anti)) {
        continue;
      }
      columns.add(col);
      diagonals.add(diagonal);
      antiDiagonals.add(anti);
      dfs(row + 1);
      columns.delete(col);
      diagonals.delete(diagonal);
      antiDiagonals.delete(anti);
    }
  };

  dfs(0);
  return count;
}

console.log(totalNQueens(4));
