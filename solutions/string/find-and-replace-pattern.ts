/**
 * 查找和替换模式
 * 难度：★★★☆☆
 * 若单词能通过一一映射变成 pattern（不同字母不能映到同一字母），则匹配。返回所有匹配单词。
 *
 * 示例：words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb" => ["mee","aqq"]
 *
 * 思路：把单词和模式都规范化成“首次出现序号”序列再比较。
 * 时间 O(n * L)，空间 O(n * L)
 */

function normalize(word: string): string {
  const indexOf = new Map<string, number>();
  const parts: string[] = [];
  for (const ch of word) {
    if (!indexOf.has(ch)) {
      indexOf.set(ch, indexOf.size);
    }
    parts.push(String(indexOf.get(ch)));
  }
  return parts.join(",");
}

export function findAndReplacePattern(words: string[], pattern: string): string[] {
  const target = normalize(pattern);
  return words.filter((word) => normalize(word) === target);
}

console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));
