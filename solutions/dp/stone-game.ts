/**
 * 石子游戏
 * 难度：★★☆☆☆
 * 偶数堆石子排成一行，两人轮流从两端取一堆，都最优。判断爱丽丝是否能赢。
 *
 * 示例：[5,3,4,5] => true
 *
 * 思路：区间 DP。dp[i][j] 是当前玩家在 piles[i..j] 上能领先对手的最大分差。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function stoneGame(piles: number[]): boolean {
  const n = piles.length;
  const dp: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = piles[i];
  }
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
    }
  }
  return dp[0][n - 1] > 0;
}

console.log(stoneGame([5, 3, 4, 5]));
