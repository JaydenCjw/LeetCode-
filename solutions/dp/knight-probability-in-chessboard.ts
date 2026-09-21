/**
 * 骑士在棋盘上的概率
 * 难度：★★★☆☆
 * n x n 棋盘上骑士从 (row, column) 出发走 k 步，每步 8 个方向等概率。求仍留在棋盘上的概率。
 *
 * 示例：n = 3, k = 2, row = 0, column = 0 => 0.0625
 *
 * 思路：按步数转移概率，走出棋盘的概率直接丢弃。
 * 时间 O(k·n^2)，空间 O(n^2)
 */

export function knightProbability(n: number, k: number, row: number, column: number): number {
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  let dp: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  dp[row][column] = 1;
  for (let step = 0; step < k; step++) {
    const next: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (dp[r][c] === 0) {
          continue;
        }
        for (const [dr, dc] of moves) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
            next[nr][nc] += dp[r][c] / 8;
          }
        }
      }
    }
    dp = next;
  }
  let answer = 0;
  for (const line of dp) {
    for (const value of line) {
      answer += value;
    }
  }
  return answer;
}

console.log(knightProbability(3, 2, 0, 0));
