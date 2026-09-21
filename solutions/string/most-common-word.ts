/**
 * 最常见的单词
 * 难度：★★☆☆☆
 * 段落中按非字母分割单词，忽略大小写和禁用词，返回出现次数最多的单词。
 *
 * 示例：paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"] => "ball"
 *
 * 思路：转小写后用正则切词，哈希计数并跳过禁用词。
 * 时间 O(n)，空间 O(n)
 */

export function mostCommonWord(paragraph: string, banned: string[]): string {
  const ban = new Set(banned);
  const count = new Map<string, number>();
  const words = paragraph.toLowerCase().split(/[^a-z]+/);
  let best = "";
  let bestCount = 0;
  for (const word of words) {
    if (word.length === 0 || ban.has(word)) {
      continue;
    }
    const next = (count.get(word) ?? 0) + 1;
    count.set(word, next);
    if (next > bestCount) {
      bestCount = next;
      best = word;
    }
  }
  return best;
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
