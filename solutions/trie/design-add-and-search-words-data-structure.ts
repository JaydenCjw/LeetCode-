/**
 * 添加与搜索单词 - 数据结构设计
 * WordDictionary：addWord / search。search 中 '.' 可匹配任意字母。
 *
 * 思路：Trie + DFS 处理通配符。
 * 时间视模式而定，空间 O(节点数)
 */

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

export class WordDictionary {
  private readonly root = new TrieNode();

  addWord(word: string): void {
    let node = this.root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new TrieNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const dfs = (index: number, node: TrieNode): boolean => {
      if (index === word.length) {
        return node.isEnd;
      }

      const char = word[index];
      if (char === ".") {
        for (const child of node.children.values()) {
          if (dfs(index + 1, child)) {
            return true;
          }
        }
        return false;
      }

      const next = node.children.get(char);
      return next ? dfs(index + 1, next) : false;
    };

    return dfs(0, this.root);
  }
}

const dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
console.log(dict.search("pad"));
console.log(dict.search("bad"));
console.log(dict.search(".ad"));
console.log(dict.search("b.."));
