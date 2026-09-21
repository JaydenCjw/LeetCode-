/**
 * 单词接龙 II
 * 难度：★★★★☆
 * 从 beginWord 每次改一个字母，变成 wordList 中的词，找出所有最短转换序列。
 *
 * 示例：beginWord = "hit"，endWord = "cog"，
 * wordList = ["hot","dot","dog","lot","log","cog"]，最短序列有 2 条。
 *
 * 思路：BFS 按层记录每个词的前驱，到达终点后 DFS 回溯所有最短路径。
 * 时间 O(N*L*26)，空间 O(N*L)
 */

export function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
  const dict = new Set(wordList);
  if (!dict.has(endWord)) {
    return [];
  }

  const parents = new Map<string, string[]>();
  let frontier = [beginWord];
  const visited = new Set<string>([beginWord]);
  let found = false;

  while (frontier.length > 0 && !found) {
    const nextFrontier: string[] = [];
    const layer = new Set<string>();
    for (const word of frontier) {
      const chars = word.split("");
      for (let i = 0; i < chars.length; i++) {
        const original = chars[i];
        for (let code = 97; code <= 122; code++) {
          const nextChar = String.fromCharCode(code);
          if (nextChar === original) {
            continue;
          }
          chars[i] = nextChar;
          const next = chars.join("");
          if (!dict.has(next) || visited.has(next)) {
            continue;
          }
          if (!layer.has(next)) {
            layer.add(next);
            nextFrontier.push(next);
          }
          const list = parents.get(next);
          if (list) {
            list.push(word);
          } else {
            parents.set(next, [word]);
          }
          if (next === endWord) {
            found = true;
          }
        }
        chars[i] = original;
      }
    }
    for (const word of layer) {
      visited.add(word);
    }
    frontier = nextFrontier;
  }

  const sequences: string[][] = [];
  const path: string[] = [];
  const build = (word: string): void => {
    path.push(word);
    if (word === beginWord) {
      sequences.push(path.slice().reverse());
    } else {
      for (const parent of parents.get(word) ?? []) {
        build(parent);
      }
    }
    path.pop();
  };
  if (found) {
    build(endWord);
  }
  return sequences;
}

console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]).length);
