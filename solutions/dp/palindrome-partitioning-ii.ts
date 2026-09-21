/**
 * 分割回文串 II
 * 难度：★★★★☆
 * 把字符串切成若干回文子串，求最少切割次数。
 *
 * 示例："aab" => 1
 *
 * 思路：先预处理回文，再 dp[i] 为前 i 个字符的最少切割。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function minCut(s: string): number {
  const n = s.length;
  const palindrome = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
  for (let right = 0; right < n; right++) {
    for (let left = 0; left <= right; left++) {
      if (s[left] === s[right] && (right - left <= 2 || palindrome[left + 1][right - 1])) {
        palindrome[left][right] = true;
      }
    }
  }

  const dp = Array.from({ length: n }, (_, i) => i);
  for (let right = 0; right < n; right++) {
    if (palindrome[0][right]) {
      dp[right] = 0;
      continue;
    }
    for (let left = 1; left <= right; left++) {
      if (palindrome[left][right]) {
        dp[right] = Math.min(dp[right], dp[left - 1] + 1);
      }
    }
  }
  return dp[n - 1];
}

console.log(minCut("aab"));
