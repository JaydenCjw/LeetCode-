/**
 * 前缀和后缀搜索
 * 难度：★★★★☆
 * 实现 WordFilter：f(prefix, suffix) 返回同时拥有该前缀和后缀、且下标最大的单词。不存在返回 -1。
 *
 * 示例：words = ["apple"]，f("a", "e") => 0
 *
 * 思路：对每个单词的每个后缀，插入「后缀#单词」。查询时走「后缀#前缀」，节点上记录最大下标。
 * 时间构造 O(总长度平方)，查询 O(前缀+后缀)，空间 O(总长度平方)
 */

class FilterNode {
  children = new Map<string, FilterNode>();
  weight = -1;
}

export class WordFilter {
  private readonly root = new FilterNode();

  constructor(words: string[]) {
    words.forEach((word, index) => {
      for (let start = 0; start <= word.length; start++) {
        const text = `${word.slice(start)}#${word}`;
        let node = this.root;
        for (const char of text) {
          let next = node.children.get(char);
          if (!next) {
            next = new FilterNode();
            node.children.set(char, next);
          }
          next.weight = index;
          node = next;
        }
      }
    });
  }

  f(prefix: string, suffix: string): number {
    let node = this.root;
    for (const char of `${suffix}#${prefix}`) {
      const next = node.children.get(char);
      if (!next) {
        return -1;
      }
      node = next;
    }
    return node.weight;
  }
}

const filter = new WordFilter(["apple"]);
console.log(filter.f("a", "e"));
