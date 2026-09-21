/**
 * 找出字符串中第一个匹配项的下标
 * 难度：★☆☆☆☆
 * 在 haystack 中找出 needle 第一次出现的下标，不存在返回 -1。
 *
 * 示例：haystack = "sadbutsad", needle = "sad" => 0
 *
 * 思路：逐位置比较子串。
 * 时间 O(n*m)，空间 O(1)
 */

export function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad"));
