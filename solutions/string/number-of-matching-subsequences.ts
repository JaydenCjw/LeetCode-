/**
 * 匹配子序列的单词数
 * 难度：★★★☆☆
 * 统计 words 中有多少个单词是 s 的子序列。
 *
 * 示例：s = "abcde", words = ["a","bb","acd","ace"] => 3
 *
 * 思路：按单词当前等待的字符分桶，扫描 s 时把匹配上的单词推进到下一个字符。
 * 时间 O(n + 单词总长度)，空间 O(单词总长度)
 */

export function numMatchingSubseq(s: string, words: string[]): number {
  const buckets: string[][] = Array.from({ length: 26 }, () => []);
  for (const word of words) {
    buckets[word.charCodeAt(0) - 97].push(word);
  }
  let count = 0;
  for (const ch of s) {
    const index = ch.charCodeAt(0) - 97;
    const waiting = buckets[index];
    buckets[index] = [];
    for (const word of waiting) {
      if (word.length === 1) {
        count++;
      } else {
        const rest = word.slice(1);
        buckets[rest.charCodeAt(0) - 97].push(rest);
      }
    }
  }
  return count;
}

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
