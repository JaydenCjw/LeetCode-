/**
 * 转换成小写字母
 * 难度：★☆☆☆☆
 * 把字符串中的大写英文字母转成小写，其他字符保持不变。
 *
 * 示例：s = "Hello" => "hello"
 *
 * 思路：A-Z 的码点加 32。
 * 时间 O(n)，空间 O(n)
 */

export function toLowerCase(s: string): string {
  let result = "";
  for (const ch of s) {
    if (ch >= "A" && ch <= "Z") {
      result += String.fromCharCode(ch.charCodeAt(0) + 32);
    } else {
      result += ch;
    }
  }
  return result;
}

console.log(toLowerCase("Hello"));
