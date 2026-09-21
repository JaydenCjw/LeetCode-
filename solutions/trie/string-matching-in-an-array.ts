/**
 * 数组中的字符串匹配
 * 难度：★★☆☆☆
 * 返回 words 中所有至少是另一个单词子串的单词。
 *
 * 示例：["mass","as","hero","superhero"] => ["as","hero"]
 *
 * 思路：全部单词插入 Trie，并在结尾记下单词和出现次数。扫描每个宿主单词的所有后缀，收集走到的其他单词。
 * 时间 O(总长度平方)，空间 O(总字符数)
 */

class MatchNode {
  children = new Map<string, MatchNode>();
  word: string | null = null;
  ends = 0;
}

export function stringMatching(words: string[]): string[] {
  const root = new MatchNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new MatchNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.word = word;
    node.ends++;
  }

  const matched = new Set<string>();
  for (const host of words) {
    for (let start = 0; start < host.length; start++) {
      let node = root;
      for (let end = start; end < host.length; end++) {
        const next = node.children.get(host[end]);
        if (!next) {
          break;
        }
        node = next;
        if (node.word !== null && (node.word !== host || node.ends > 1)) {
          matched.add(node.word);
        }
      }
    }
  }

  return words.filter((word) => matched.has(word));
}

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
