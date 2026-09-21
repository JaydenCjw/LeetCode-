/**
 * 地下城游戏
 * 难度：★★★★☆
 * 骑士从左上走到右下，格子会增减生命。任何时刻生命至少为 1，求出发时最少生命。
 *
 * 示例：[[-2,-3,3],[-5,-10,1],[10,30,-5]] => 7
 *
 * 思路：从公主房间倒推，每个格子需要的生命是右、下需求减去本格变化后至少为 1。
 * 时间 O(mn)，空间 O(mn)
 */

export function calculateMinimumHP(dungeon: number[][]): number {
  const m = dungeon.length;
  const n = dungeon[0].length;
  const dp: number[][] = Array.from({ length: m }, () => new Array<number>(n).fill(0));
  dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) {
        continue;
      }
      let need = Number.POSITIVE_INFINITY;
      if (i + 1 < m) {
        need = Math.min(need, dp[i + 1][j]);
      }
      if (j + 1 < n) {
        need = Math.min(need, dp[i][j + 1]);
      }
      dp[i][j] = Math.max(1, need - dungeon[i][j]);
    }
  }
  return dp[0][0];
}

console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ]),
);
