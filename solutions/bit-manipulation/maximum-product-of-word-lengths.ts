/**
 * 最大单词长度乘积
 * 难度：★★★☆☆
 * 返回两个不含公共字母的单词的长度乘积最大值。没有则 0。
 *
 * 示例：["abcw","baz","foo","bar","xtfn","abcdef"] => 16
 *
 * 思路：每个单词压成 26 位掩码，掩码相与为 0 则可配对。
 * 时间 O(n^2)，空间 O(n)
 */

export function maxProduct(words: string[]): number {
  const masks = words.map((word) => {
    let mask = 0;
    for (const ch of word) {
      mask |= 1 << (ch.charCodeAt(0) - 97);
    }
    return mask;
  });
  let best = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        best = Math.max(best, words[i].length * words[j].length);
      }
    }
  }
  return best;
}

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
