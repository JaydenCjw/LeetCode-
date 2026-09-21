/**
 * 字符串中的额外字符
 * 难度：★★★☆☆
 * 可以把 dictionary 中的单词从 s 里删掉（可重叠地按子串删除）。返回无法删掉的最少字符数。
 *
 * 示例：s = "leetscode"，dictionary = ["leet","code","leetcode"] => 1
 *
 * 思路：词典建成 Trie。从每个位置向后匹配单词，DP 记录后缀的最少额外字符。
 * 时间 O(n^2)，空间 O(总字符数 + n)
 */

class ExtraNode {
  children = new Map<string, ExtraNode>();
  isEnd = false;
}

export function minExtraChar(s: string, dictionary: string[]): number {
  const root = new ExtraNode();
  for (const word of dictionary) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new ExtraNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  const dp = new Array<number>(s.length + 1).fill(0);
  for (let start = s.length - 1; start >= 0; start--) {
    dp[start] = dp[start + 1] + 1;
    let node = root;
    for (let end = start; end < s.length; end++) {
      const next = node.children.get(s[end]);
      if (!next) {
        break;
      }
      node = next;
      if (node.isEnd) {
        dp[start] = Math.min(dp[start], dp[end + 1]);
      }
    }
  }
  return dp[0];
}

console.log(minExtraChar("leetscode", ["leet", "code", "leetcode"]));
