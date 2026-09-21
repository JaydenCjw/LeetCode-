/**
 * 字符串的前缀分数和
 * 难度：★★★★☆
 * 一个字符串的前缀分数是：它的每个前缀在 words 里作为前缀出现的次数之和。返回每个字符串的分数。
 *
 * 示例：["abc","ab","bc","b"] => [5,4,3,2]
 *
 * 思路：Trie 节点记录经过次数。插入后，沿每个单词把路径上的次数加起来。
 * 时间 O(总字符数)，空间 O(总字符数)
 */

class ScoreNode {
  children = new Map<string, ScoreNode>();
  pass = 0;
}

export function sumPrefixScores(words: string[]): number[] {
  const root = new ScoreNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new ScoreNode();
        node.children.set(char, next);
      }
      next.pass++;
      node = next;
    }
  }

  return words.map((word) => {
    let node = root;
    let score = 0;
    for (const char of word) {
      const next = node.children.get(char);
      if (!next) {
        break;
      }
      score += next.pass;
      node = next;
    }
    return score;
  });
}

console.log(sumPrefixScores(["abc", "ab", "bc", "b"]));
