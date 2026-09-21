/**
 * 所有元音按顺序排布的最长子字符串
 * 难度：★★☆☆☆
 * 美好子串只含元音，且 a、e、i、o、u 按这个顺序出现（可重复当前元音）。返回最长长度。
 *
 * 示例：word = "aeiaaioaaaaeiiiiouuuooaauuaeiu" => 13
 *
 * 思路：元音字母序递增，下降就重新开始，五种都出现过时更新长度。
 * 时间 O(n)，空间 O(1)
 */

export function longestBeautifulSubstring(word: string): number {
  let best = 0;
  let length = 1;
  let kinds = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i] < word[i - 1]) {
      length = 1;
      kinds = 1;
    } else {
      length++;
      if (word[i] > word[i - 1]) {
        kinds++;
      }
      if (kinds === 5) {
        best = Math.max(best, length);
      }
    }
  }
  return best;
}

console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));
