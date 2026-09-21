/**
 * 实现一个魔法字典
 * 难度：★★☆☆☆
 * buildDict 放入单词。search 判断是否存在与给定词长度相同、且恰好差一个字母的单词。
 *
 * 示例：buildDict(["hello","leetcode"])，search("hello") => false，search("hhllo") => true
 *
 * 思路：单词插入 Trie。搜索时允许且必须在某一层改一个字符。
 * 时间搜索 O(26^k * L) 在改动次数 k=1 时为 O(26L)，空间 O(总字符数)
 */

class MagicNode {
  children = new Map<string, MagicNode>();
  isEnd = false;
}

export class MagicDictionary {
  private readonly root = new MagicNode();

  buildDict(dictionary: string[]): void {
    for (const word of dictionary) {
      let node = this.root;
      for (const char of word) {
        let next = node.children.get(char);
        if (!next) {
          next = new MagicNode();
          node.children.set(char, next);
        }
        node = next;
      }
      node.isEnd = true;
    }
  }

  search(searchWord: string): boolean {
    const walk = (node: MagicNode, index: number, changed: boolean): boolean => {
      if (index === searchWord.length) {
        return changed && node.isEnd;
      }
      for (const [char, child] of node.children) {
        if (char === searchWord[index]) {
          if (walk(child, index + 1, changed)) {
            return true;
          }
        } else if (!changed && walk(child, index + 1, true)) {
          return true;
        }
      }
      return false;
    };
    return walk(this.root, 0, false);
  }
}

const magic = new MagicDictionary();
magic.buildDict(["hello", "leetcode"]);
console.log(magic.search("hello"));
console.log(magic.search("hhllo"));
