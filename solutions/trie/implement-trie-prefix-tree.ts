/**
 * 实现 Trie（前缀树）
 * 实现 insert / search / startsWith。
 *
 * 思路：26 叉树，逐字符建节点。
 * 时间每操作 O(L)，空间 O(节点总数)
 */

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

export class Trie {
  private readonly root = new TrieNode();

  insert(word: string): void {
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
    const node = this.findNode(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  private findNode(text: string): TrieNode | null {
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
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
