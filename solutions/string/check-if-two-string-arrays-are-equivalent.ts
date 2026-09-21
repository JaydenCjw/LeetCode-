/**
 * 检查两个字符串数组是否相等
 * 难度：★☆☆☆☆
 * 把两个字符串数组各自按顺序拼接后，判断是否相等。
 *
 * 示例：word1 = ["ab","c"], word2 = ["a","bc"] => true
 *
 * 思路：双指针同时扫描两个数组，逐字符比较，避免先拼出完整字符串。
 * 时间 O(n + m)，空间 O(1)
 */

export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let i = 0;
  let j = 0;
  let a = 0;
  let b = 0;
  while (i < word1.length && j < word2.length) {
    if (word1[i][a] !== word2[j][b]) {
      return false;
    }
    a++;
    b++;
    if (a === word1[i].length) {
      i++;
      a = 0;
    }
    if (b === word2[j].length) {
      j++;
      b = 0;
    }
  }
  return i === word1.length && j === word2.length;
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
