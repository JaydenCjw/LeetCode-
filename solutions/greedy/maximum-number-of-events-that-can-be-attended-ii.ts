/**
 * 最多可以参加的会议数目 II
 * 难度：★★★★☆
 * 每个会议有开始、结束和价值，最多参加 k 场且时间不重叠。求最大价值。
 *
 * 示例：events = [[1,2,4],[3,4,3],[2,3,1]], k = 2 => 7
 *
 * 思路：按结束时间排序。二分找到不重叠的前一场，再对参加场数做背包。
 * 时间 O(nk log n)，空间 O(nk)
 */

export function maxValue(events: number[][], k: number): number {
  events.sort((a, b) => a[1] - b[1]);
  const n = events.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(k + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    const start = events[i - 1][0];
    const value = events[i - 1][2];
    let lo = 0;
    let hi = i - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (events[mid][1] < start) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    for (let used = 1; used <= k; used++) {
      dp[i][used] = Math.max(dp[i - 1][used], dp[lo][used - 1] + value);
    }
  }
  return dp[n][k];
}

console.log(
  maxValue(
    [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 1],
    ],
    2,
  ),
);
