/**
 * 新 21 点
 * 难度：★★★☆☆
 * 从 0 开始，分数小于 k 时必须再抽一张 1..maxPts 的牌。停止后分数不超过 n 即获胜。求获胜概率。
 *
 * 示例：n = 10, k = 1, maxPts = 10 => 1
 *
 * 思路：若 k 为 0 或 n 大到必胜则直接返回 1。否则滑动窗口维护可继续抽牌的概率和。
 * 时间 O(n)，空间 O(n)
 */

export function new21Game(n: number, k: number, maxPts: number): number {
  if (k === 0 || n >= k + maxPts - 1) {
    return 1;
  }
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;
  let window = 1;
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = window / maxPts;
    if (i < k) {
      window += dp[i];
    } else {
      answer += dp[i];
    }
    if (i - maxPts >= 0 && i - maxPts < k) {
      window -= dp[i - maxPts];
    }
  }
  return answer;
}

console.log(new21Game(10, 1, 10));
