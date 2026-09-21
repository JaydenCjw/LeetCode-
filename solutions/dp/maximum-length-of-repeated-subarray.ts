/**
 * 最长重复子数组
 * 难度：★★★☆☆
 * 找出两个数组中最长的公共连续子数组长度。
 *
 * 示例：[1,2,3,2,1] 与 [3,2,1,4,7] => 3
 *
 * 思路：dp[i][j] 表示以两数组对应位置结尾的公共后缀长度，相等则由左上加一。
 * 时间 O(mn)，空间 O(mn)
 */

export function findLength(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array<number>(n + 1).fill(0),
  );
  let best = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        best = Math.max(best, dp[i][j]);
      }
    }
  }
  return best;
}

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
