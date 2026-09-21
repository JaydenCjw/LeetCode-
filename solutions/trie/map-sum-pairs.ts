/**
 * 键值映射
 * 难度：★★☆☆☆
 * 实现 MapSum：insert(key, val) 插入或覆盖键值，sum(prefix) 返回所有以 prefix 开头的键的值之和。
 *
 * 示例：insert("apple", 3)，sum("ap") => 3；再 insert("app", 2)，sum("ap") => 5
 *
 * 思路：Trie 每个节点记录经过它的键值增量。重复插入时用差值更新路径。
 * 时间每次 O(L)，空间 O(总字符数)
 */

class MapSumNode {
  children = new Map<string, MapSumNode>();
  score = 0;
}

export class MapSum {
  private readonly root = new MapSumNode();
  private readonly values = new Map<string, number>();

  insert(key: string, val: number): void {
    const delta = val - (this.values.get(key) ?? 0);
    this.values.set(key, val);
    let node = this.root;
    for (const char of key) {
      let next = node.children.get(char);
      if (!next) {
        next = new MapSumNode();
        node.children.set(char, next);
      }
      node = next;
      node.score += delta;
    }
  }

  sum(prefix: string): number {
    let node = this.root;
    for (const char of prefix) {
      const next = node.children.get(char);
      if (!next) {
        return 0;
      }
      node = next;
    }
    return node.score;
  }
}

const mapSum = new MapSum();
mapSum.insert("apple", 3);
console.log(mapSum.sum("ap"));
mapSum.insert("app", 2);
console.log(mapSum.sum("ap"));
