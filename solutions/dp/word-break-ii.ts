/**
 * 单词拆分 II
 * 难度：★★★★☆
 * 用词典中的单词把 s 拆成句子，返回所有可能句子。
 *
 * 示例：s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * => ["cats and dog","cat sand dog"]
 *
 * 思路：从每个下标记忆化回溯，命中词典则拼接后半段的所有句子。
 * 时间 O(n^2 * 句子数)，空间 O(n * 句子数)
 */

export function wordBreak(s: string, wordDict: string[]): string[] {
  const dict = new Set(wordDict);
  const memo = new Map<number, string[]>();

  function dfs(start: number): string[] {
    const cached = memo.get(start);
    if (cached !== undefined) {
      return cached;
    }
    if (start === s.length) {
      return [""];
    }
    const result: string[] = [];
    for (let end = start + 1; end <= s.length; end++) {
      const word = s.slice(start, end);
      if (!dict.has(word)) {
        continue;
      }
      for (const rest of dfs(end)) {
        result.push(rest === "" ? word : `${word} ${rest}`);
      }
    }
    memo.set(start, result);
    return result;
  }

  return dfs(0);
}

console.log(
  JSON.stringify(
    wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]).sort(),
  ),
);
