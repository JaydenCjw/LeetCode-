/**
 * 出界的路径数
 * 难度：★★★☆☆
 * 在 m x n 网格上从起点最多走 maxMove 步，求走出边界的路径数，答案对 10^9+7 取模。
 *
 * 示例：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0 => 6
 *
 * 思路：按步数滚动，每一步把越界的方案计入答案，界内方案转移到下一层。
 * 时间 O(maxMove·mn)，空间 O(mn)
 */

const MOD = 1_000_000_007;

export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  let dp: number[][] = Array.from({ length: m }, () => new Array<number>(n).fill(0));
  dp[startRow][startColumn] = 1;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let answer = 0;
  for (let move = 0; move < maxMove; move++) {
    const next: number[][] = Array.from({ length: m }, () => new Array<number>(n).fill(0));
    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (dp[r][c] === 0) {
          continue;
        }
        for (const [dr, dc] of dirs) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
            answer = (answer + dp[r][c]) % MOD;
          } else {
            next[nr][nc] = (next[nr][nc] + dp[r][c]) % MOD;
          }
        }
      }
    }
    dp = next;
  }
  return answer;
}

console.log(findPaths(2, 2, 2, 0, 0));
