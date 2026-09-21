/**
 * 统计前后缀下标对 II
 * 难度：★★★★☆
 * 与「统计前后缀下标对 I」相同：统计 i < j 且 words[i] 同时是 words[j] 前缀和后缀的对数。本题用 Trie 处理更长的单词表。
 *
 * 示例：["a","aba","ababa","aa"] => 4
 *
 * 思路：把第 i 个字符和倒数第 i 个字符绑成一对插入 Trie。走到某个单词结尾时，路径上已结束的更短单词都是合法对。
 * 时间 O(总字符数)，空间 O(总字符数)
 */

class PairNode {
  children = new Map<string, PairNode>();
  end = 0;
}

export function countPrefixSuffixPairs(words: string[]): number {
  const root = new PairNode();
  let count = 0;
  for (const word of words) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      const key = `${word[i]}${word[word.length - 1 - i]}`;
      let next = node.children.get(key);
      if (!next) {
        next = new PairNode();
        node.children.set(key, next);
      }
      node = next;
      count += node.end;
    }
    node.end++;
  }
  return count;
}

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
