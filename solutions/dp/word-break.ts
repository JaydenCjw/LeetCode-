/**
 * 单词拆分
 * 难度：★★★☆☆
 * 判断 s 能否被拆成字典 wordDict 中单词的空格分隔序列。
 *
 * 示例：s = "leetcode", wordDict = ["leet","code"] => true
 *
 * 思路：dp[i] 表示前 i 个字符可拆；枚举切分点。
 * 时间 O(n^2)，空间 O(n)
 */

export function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const dp = new Array<boolean>(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && wordSet.has(s.slice(start, end))) {
        dp[end] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
