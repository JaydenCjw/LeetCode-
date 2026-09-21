/**
 * 单词的压缩编码
 * 难度：★★☆☆☆
 * 把单词编码成以 # 结尾的串并拼接。若一个单词是另一个单词的后缀，它可以不再单独编码。返回最短编码长度。
 *
 * 示例：["time","me","bell"] => 10
 *
 * 思路：把单词反转后插入 Trie。只有叶子对应的单词需要单独编码，长度为单词长度加 1。
 * 时间 O(总字符数)，空间 O(总字符数)
 */

class EncodeNode {
  children = new Map<string, EncodeNode>();
}

export function minimumLengthEncoding(words: string[]): number {
  const unique = [...new Set(words)];
  const root = new EncodeNode();
  const ends: EncodeNode[] = [];
  for (const word of unique) {
    let node = root;
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      let next = node.children.get(char);
      if (!next) {
        next = new EncodeNode();
        node.children.set(char, next);
      }
      node = next;
    }
    ends.push(node);
  }

  let length = 0;
  for (let i = 0; i < unique.length; i++) {
    if (ends[i].children.size === 0) {
      length += unique[i].length + 1;
    }
  }
  return length;
}

console.log(minimumLengthEncoding(["time", "me", "bell"]));
