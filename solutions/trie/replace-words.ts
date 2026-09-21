/**
 * 前缀替换
 * 难度：★★★☆☆
 * 词典中若有词是句子单词的前缀，用最短前缀替换该单词。
 *
 * 思路：把词典建成字典树，逐词匹配最短前缀。
 * 时间 O(总长度)，空间 O(词典长度)
 */

class TrieNode {
  children = new Map<string, TrieNode>();
  word: string | null = null;
}

export function replaceWords(dictionary: string[], sentence: string): string {
  const root = new TrieNode();
  for (const word of dictionary) {
    let node = root;
    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch)!;
    }
    node.word = word;
  }

  return sentence.split(" ").map((word) => {
    let node = root;
    for (const ch of word) {
      if (node.word || !node.children.has(ch)) {
        break;
      }
      node = node.children.get(ch)!;
    }
    return node.word ?? word;
  }).join(" ");
}

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));
