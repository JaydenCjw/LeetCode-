/**
 * 包含所有三种字符的子字符串数目
 * 难度：★★★☆☆
 * 字符串只含 a、b、c。统计同时包含三种字符的子串个数。
 *
 * 示例：s = "abcabc" => 10
 *
 * 思路：右端扩展，一旦窗口凑齐三种字符就尽量收缩，左端左侧的起点都合法。
 * 时间 O(n)，空间 O(1)
 */

export function numberOfSubstrings(s: string): number {
  const count = [0, 0, 0];
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    count[s.charCodeAt(right) - 97]++;
    while (count[0] > 0 && count[1] > 0 && count[2] > 0) {
      count[s.charCodeAt(left) - 97]--;
      left++;
    }
    result += left;
  }
  return result;
}

console.log(numberOfSubstrings("abcabc"));
