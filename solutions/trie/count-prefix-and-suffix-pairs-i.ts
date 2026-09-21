/**
 * 统计前后缀下标对 I
 * 难度：★★☆☆☆
 * 返回满足 i < j、且 words[i] 同时是 words[j] 的前缀和后缀的下标对数量。
 *
 * 示例：["a","aba","ababa","aa"] => 4
 *
 * 思路：数据规模较小时直接双重循环，用 startsWith 与 endsWith 判断。
 * 时间 O(n^2 * L)，空间 O(1)
 */

export function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;
  for (let left = 0; left < words.length; left++) {
    for (let right = left + 1; right < words.length; right++) {
      const shorter = words[left];
      const longer = words[right];
      if (longer.startsWith(shorter) && longer.endsWith(shorter)) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
