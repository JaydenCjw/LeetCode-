/**
 * 较大分组的位置
 * 难度：★★☆☆☆
 * 较大分组是连续 3 个及以上相同字符。返回每个较大分组的起止下标（含）。
 *
 * 示例：s = "abbxxxxzzy" => [[3,6]]
 *
 * 思路：一次扫描切分连续段，长度达到 3 就记录区间。
 * 时间 O(n)，空间 O(1)（不计输出）
 */

export function largeGroupPositions(s: string): number[][] {
  const result: number[][] = [];
  let start = 0;
  for (let i = 1; i <= s.length; i++) {
    if (i === s.length || s[i] !== s[start]) {
      if (i - start >= 3) {
        result.push([start, i - 1]);
      }
      start = i;
    }
  }
  return result;
}

console.log(largeGroupPositions("abbxxxxzzy"));
