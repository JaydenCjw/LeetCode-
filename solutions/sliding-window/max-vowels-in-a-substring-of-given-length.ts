/**
 * 定长子串中元音的最大数目
 * 难度：★★☆☆☆
 * 返回长度为 k 的子串中，元音字母（a/e/i/o/u）的最大个数。
 *
 * 示例：s = "abciiidef", k = 3 => 3
 *
 * 思路：定长窗口滑动，进出窗口时增减元音计数。
 * 时间 O(n)，空间 O(1)
 */

function isVowel(ch: string): boolean {
  return ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u";
}

export function maxVowels(s: string, k: number): number {
  let vowels = 0;
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowels++;
    }
    if (i >= k && isVowel(s[i - k])) {
      vowels--;
    }
    if (i >= k - 1) {
      best = Math.max(best, vowels);
    }
  }
  return best;
}

console.log(maxVowels("abciiidef", 3));
