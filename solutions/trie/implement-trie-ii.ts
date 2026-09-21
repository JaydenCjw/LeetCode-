/**
 * 实现 Trie II
 * 难度：★★☆☆☆
 * 支持 insert、countWordsEqualTo、countWordsStartingWith 和 erase。erase 保证单词已存在。
 *
 * 示例：两次 insert("apple") 后，countWordsEqualTo("apple") => 2，countWordsStartingWith("app") => 2；
 * erase("apple") 后 countWordsEqualTo("apple") => 1
 *
 * 思路：节点同时记录经过次数和结尾次数。插入加一，删除减一。
 * 时间每次 O(L)，空间 O(总字符数)
 */

class TrieIINode {
  children = new Map<string, TrieIINode>();
  pass = 0;
  end = 0;
}

export class Trie {
  private readonly root = new TrieIINode();

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new TrieIINode();
        node.children.set(char, next);
      }
      next.pass++;
      node = next;
    }
    node.end++;
  }

  countWordsEqualTo(word: string): number {
    const node = this.walk(word);
    return node ? node.end : 0;
  }

  countWordsStartingWith(prefix: string): number {
    const node = this.walk(prefix);
    return node ? node.pass : 0;
  }

  erase(word: string): void {
    let node = this.root;
    for (const char of word) {
      const next = node.children.get(char);
      if (!next) {
        return;
      }
      next.pass--;
      node = next;
    }
    node.end--;
  }

  private walk(text: string): TrieIINode | null {
    let node = this.root;
    for (const char of text) {
      const next = node.children.get(char);
      if (!next) {
        return null;
      }
      node = next;
    }
    return node;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("apple");
console.log(trie.countWordsEqualTo("apple"));
console.log(trie.countWordsStartingWith("app"));
trie.erase("apple");
console.log(trie.countWordsEqualTo("apple"));
