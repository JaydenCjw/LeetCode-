/**
 * 找不同
 * 难度：★☆☆☆☆
 * t 由 s 随机重排后再多加入一个字符组成，返回多出来的字符。
 *
 * 示例：s = "abcd", t = "abcde" => "e"
 *
 * 思路：对全部字符做异或，成对字符抵消后剩下新增字符。
 * 时间 O(n)，空间 O(1)
 */

export function findTheDifference(s: string, t: string): string {
  let code = 0;
  for (const ch of s) {
    code ^= ch.charCodeAt(0);
  }
  for (const ch of t) {
    code ^= ch.charCodeAt(0);
  }
  return String.fromCharCode(code);
}

console.log(findTheDifference("abcd", "abcde"));
