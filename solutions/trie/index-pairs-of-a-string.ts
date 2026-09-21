/**
 * 字符串的索引对
 * 难度：★★☆☆☆
 * 返回 text 中所有属于 words 的子串区间 [start, end]（闭区间），按起点、终点升序。
 *
 * 示例：text = "thestoryofleetcodeandme"，words = ["story","fleet","leetcode"]
 * => [[3,7],[9,13],[10,17]]
 *
 * 思路：单词插入 Trie。从 text 每个起点沿 Trie 向下走，遇到单词结尾就记录区间。
 * 时间 O(text 长度 * 最长单词)，空间 O(总字符数)
 */

class IndexNode {
  children = new Map<string, IndexNode>();
  isEnd = false;
}

export function indexPairs(text: string, words: string[]): number[][] {
  const root = new IndexNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new IndexNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  const pairs: number[][] = [];
  for (let start = 0; start < text.length; start++) {
    let node = root;
    for (let end = start; end < text.length; end++) {
      const next = node.children.get(text[end]);
      if (!next) {
        break;
      }
      node = next;
      if (node.isEnd) {
        pairs.push([start, end]);
      }
    }
  }
  return pairs;
}

console.log(indexPairs("thestoryofleetcodeandme", ["story", "fleet", "leetcode"]));
