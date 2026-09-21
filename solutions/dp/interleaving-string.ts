/**
 * 交错字符串
 * 难度：★★★☆☆
 * 判断 s3 是否由 s1 和 s2 交错组成（保持各自相对顺序）。
 *
 * 示例：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" => true
 *
 * 思路：dp[i][j] 表示 s1 前 i 与 s2 前 j 能否组成 s3 前 i+j。
 * 时间 O(m*n)，空间 O(n)
 */

export function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  const dp = new Array<boolean>(s2.length + 1).fill(false);
  dp[0] = true;

  for (let j = 1; j <= s2.length; j++) {
    dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
    for (let j = 1; j <= s2.length; j++) {
      const fromS1 = dp[j] && s1[i - 1] === s3[i + j - 1];
      const fromS2 = dp[j - 1] && s2[j - 1] === s3[i + j - 1];
      dp[j] = fromS1 || fromS2;
    }
  }

  return dp[s2.length];
}

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
