/**
 * 设计搜索自动补全系统
 * 难度：★★★★☆
 * 初始化若干句子和热度。每次输入一个字符，返回当前前缀下热度最高的至多 3 个句子（热度降序，热度相同则字典序升序）。输入 # 时保存本句并热度加一，返回空数组。
 *
 * 示例：句子 ["i love you","island","ironman","i love leetcode"]，热度 [5,3,2,2]。
 * 输入 i => ["i love you","island","i love leetcode"]；空格 => ["i love you","i love leetcode"]；a => []；# => []
 *
 * 思路：句子插入 Trie，结尾记下整句。沿当前前缀收集子树句子再排序取前三。
 * 时间每次输入与候选句数量有关，空间 O(总字符数)
 */

class AutoNode {
  children = new Map<string, AutoNode>();
  sentence: string | null = null;
}

export class AutocompleteSystem {
  private readonly root = new AutoNode();
  private readonly hot = new Map<string, number>();
  private node: AutoNode | null = this.root;
  private buffer = "";

  constructor(sentences: string[], times: number[]) {
    for (let i = 0; i < sentences.length; i++) {
      this.hot.set(sentences[i], times[i]);
      this.insert(sentences[i]);
    }
  }

  private insert(sentence: string): void {
    let node = this.root;
    for (const char of sentence) {
      let next = node.children.get(char);
      if (!next) {
        next = new AutoNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.sentence = sentence;
  }

  private collect(node: AutoNode, found: string[]): void {
    if (node.sentence !== null) {
      found.push(node.sentence);
    }
    for (const child of node.children.values()) {
      this.collect(child, found);
    }
  }

  input(c: string): string[] {
    if (c === "#") {
      this.hot.set(this.buffer, (this.hot.get(this.buffer) ?? 0) + 1);
      this.insert(this.buffer);
      this.buffer = "";
      this.node = this.root;
      return [];
    }
    this.buffer += c;
    if (this.node) {
      this.node = this.node.children.get(c) ?? null;
    }
    if (!this.node) {
      return [];
    }
    const found: string[] = [];
    this.collect(this.node, found);
    found.sort((left, right) => {
      const diff = (this.hot.get(right) ?? 0) - (this.hot.get(left) ?? 0);
      if (diff !== 0) {
        return diff;
      }
      if (left < right) {
        return -1;
      }
      if (left > right) {
        return 1;
      }
      return 0;
    });
    return found.slice(0, 3);
  }
}

const autocomplete = new AutocompleteSystem(
  ["i love you", "island", "ironman", "i love leetcode"],
  [5, 3, 2, 2],
);
console.log(autocomplete.input("i"));
console.log(autocomplete.input(" "));
console.log(autocomplete.input("a"));
console.log(autocomplete.input("#"));
