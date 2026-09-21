/**
 * 字符流
 * 难度：★★★★☆
 * 给定单词表。字符按顺序流入，每次询问当前流的某个后缀是否等于单词表中的单词。
 *
 * 示例：words = ["cd","f","kl"]，依次查询 a 到 l
 * => [false,false,false,true,false,true,false,false,false,false,false,true]
 *
 * 思路：把单词反转插入 Trie。每次从最新字符往回走，走到单词结尾即命中。
 * 时间每次查询 O(最长单词)，空间 O(总字符数)
 */

class StreamNode {
  children = new Map<string, StreamNode>();
  isEnd = false;
}

export class StreamChecker {
  private readonly root = new StreamNode();
  private readonly history: string[] = [];
  private readonly maxLength: number;

  constructor(words: string[]) {
    let maxLength = 0;
    for (const word of words) {
      maxLength = Math.max(maxLength, word.length);
      let node = this.root;
      for (let i = word.length - 1; i >= 0; i--) {
        const char = word[i];
        let next = node.children.get(char);
        if (!next) {
          next = new StreamNode();
          node.children.set(char, next);
        }
        node = next;
      }
      node.isEnd = true;
    }
    this.maxLength = maxLength;
  }

  query(letter: string): boolean {
    this.history.push(letter);
    let node = this.root;
    const start = Math.max(0, this.history.length - this.maxLength);
    for (let i = this.history.length - 1; i >= start; i--) {
      const next = node.children.get(this.history[i]);
      if (!next) {
        return false;
      }
      node = next;
      if (node.isEnd) {
        return true;
      }
    }
    return false;
  }
}

const checker = new StreamChecker(["cd", "f", "kl"]);
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
console.log(letters.map((letter) => checker.query(letter)));
