/**
 * 预测赢家
 * 难度：★★★☆☆
 * 两人轮流从数组两端取数，都最优。玩家 1 分数大于等于玩家 2 则获胜。
 *
 * 示例：[1,5,2] => false；[1,5,233,7] => true
 *
 * 思路：区间 DP，dp[i][j] 为当前玩家相对对手的最大分差，分差非负即可获胜。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function predictTheWinner(nums: number[]): boolean {
  const n = nums.length;
  const dp: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  return dp[0][n - 1] >= 0;
}

console.log(predictTheWinner([1, 5, 2]));
console.log(predictTheWinner([1, 5, 233, 7]));
