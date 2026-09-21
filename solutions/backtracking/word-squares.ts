/**
 * 单词方块
 * 难度：★★★★☆
 * 用给定单词组成单词方块：第 k 行第 i 列等于第 i 行第 k 列。返回其中一种。
 *
 * 示例：["area","lead","wall","lady","ball"] 可得到
 * wall / area / lead / lady
 *
 * 思路：按前缀索引候选词。逐行选择时，前缀由已选单词的对应列拼出。
 * 时间 O(n·L^L)，空间 O(n·L)
 */

export function wordSquares(words: string[]): string[][] {
  const prefixes = new Map<string, string[]>();
  for (const word of words) {
    for (let i = 0; i <= word.length; i++) {
      const prefix = word.slice(0, i);
      const list = prefixes.get(prefix);
      if (list) {
        list.push(word);
      } else {
        prefixes.set(prefix, [word]);
      }
    }
  }
  const size = words[0].length;
  const answer: string[][] = [];

  function dfs(path: string[]): void {
    if (path.length === size) {
      answer.push(path.slice());
      return;
    }
    let prefix = "";
    for (const word of path) {
      prefix += word[path.length];
    }
    const candidates = prefixes.get(prefix) ?? [];
    for (const word of candidates) {
      path.push(word);
      dfs(path);
      path.pop();
    }
  }

  for (const word of words) {
    dfs([word]);
  }
  return answer;
}

const squares = wordSquares(["area", "lead", "wall", "lady", "ball"]);
console.log(JSON.stringify(squares[0]));
