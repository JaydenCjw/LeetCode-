/**
 * 石子游戏 III
 * 难度：★★★☆☆
 * 两人轮流从开头取 1、2 或 3 堆石子。比较最优得分，返回 "Alice"、"Bob" 或 "Tie"。
 *
 * 示例：piles = [1,2,3,7] => "Bob"；piles = [1,2,3,-9] => "Alice"
 *
 * 思路：从右往左，dp[i] 为从 i 出发当前玩家相对对手的最大分差。
 * 时间 O(n)，空间 O(n)
 */

export function stoneGameIII(piles: number[]): string {
  const n = piles.length;
  const dp = new Array<number>(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let best = Number.NEGATIVE_INFINITY;
    let take = 0;
    for (let k = 0; k < 3 && i + k < n; k++) {
      take += piles[i + k];
      best = Math.max(best, take - dp[i + k + 1]);
    }
    dp[i] = best;
  }
  if (dp[0] > 0) {
    return "Alice";
  }
  if (dp[0] < 0) {
    return "Bob";
  }
  return "Tie";
}

console.log(stoneGameIII([1, 2, 3, 7]));
console.log(stoneGameIII([1, 2, 3, -9]));
