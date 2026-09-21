/**
 * 连接词
 * 难度：★★★★☆
 * 连接词至少由数组中两个更短的单词拼接而成。返回所有连接词。
 *
 * 示例：["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 * => ["catsdogcats","dogcatsdog","ratcatdogcat"]
 *
 * 思路：单词插入 Trie。对每个词做划分 DP，至少分成两段且每段都是词典单词才算连接词。
 * 时间 O(总长度平方)，空间 O(总字符数)
 */

class ConcatNode {
  children = new Map<string, ConcatNode>();
  isEnd = false;
}

export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  const root = new ConcatNode();
  for (const word of words) {
    if (word.length === 0) {
      continue;
    }
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new ConcatNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  const isConcatenated = (word: string): boolean => {
    const dp = new Array<boolean>(word.length + 1).fill(false);
    dp[0] = true;
    for (let start = 0; start < word.length; start++) {
      if (!dp[start]) {
        continue;
      }
      let node = root;
      for (let end = start; end < word.length; end++) {
        const next = node.children.get(word[end]);
        if (!next) {
          break;
        }
        node = next;
        if (node.isEnd && end + 1 < word.length) {
          dp[end + 1] = true;
        } else if (node.isEnd && end + 1 === word.length && start > 0) {
          dp[end + 1] = true;
        }
      }
    }
    return dp[word.length];
  };

  return words.filter((word) => word.length > 0 && isConcatenated(word));
}

console.log(
  findAllConcatenatedWordsInADict([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ]),
);
