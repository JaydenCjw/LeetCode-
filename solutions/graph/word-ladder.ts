/**
 * 单词接龙
 * 难度：★★★★☆
 * 每次改一个字母，从 beginWord 变到 endWord，返回最短转换序列长度；无法转换返回 0。
 *
 * 示例：beginWord = "hit", endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"] => 5
 *
 * 思路：BFS，单词作图节点。
 * 时间 O(n * L^2)，空间 O(n*L)
 */

export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const words = new Set(wordList);
  if (!words.has(endWord)) return 0;

  const queue: string[] = [beginWord];
  const visited = new Set<string>([beginWord]);
  let steps = 1;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const word = queue.shift()!;
      if (word === endWord) return steps;

      const chars = word.split("");
      for (let j = 0; j < chars.length; j++) {
        const original = chars[j];
        for (let code = 97; code <= 122; code++) {
          chars[j] = String.fromCharCode(code);
          const next = chars.join("");
          if (words.has(next) && !visited.has(next)) {
            visited.add(next);
            queue.push(next);
          }
        }
        chars[j] = original;
      }
    }
    steps++;
  }

  return 0;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
