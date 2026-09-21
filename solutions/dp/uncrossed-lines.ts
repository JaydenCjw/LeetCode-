/**
 * 不相交的线
 * 难度：★★★☆☆
 * 在两条数字线上连接相等的数，连线不能相交，求最多连线数。
 *
 * 示例：nums1 = [1,4,2], nums2 = [1,2,4] => 2
 *
 * 思路：不相交连线就是最长公共子序列。
 * 时间 O(mn)，空间 O(mn)
 */

export function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array<number>(n + 1).fill(0),
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
