/**
 * 压缩字符串
 * 难度：★★☆☆☆
 * 原地压缩字符数组：连续相同字符写成字符加次数（次数为 1 时省略）。返回压缩后的长度。
 *
 * 示例：chars = ["a","a","b","b","c","c","c"] => 长度 6，数组前 6 位为 ["a","2","b","2","c","3"]
 *
 * 思路：读指针统计连续段，写指针写入字符和十进制次数。
 * 时间 O(n)，空间 O(1)
 */

export function compress(chars: string[]): number {
  let write = 0;
  let read = 0;
  while (read < chars.length) {
    const current = chars[read];
    let count = 0;
    while (read < chars.length && chars[read] === current) {
      read++;
      count++;
    }
    chars[write] = current;
    write++;
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
  }
  return write;
}

const chars = ["a", "a", "b", "b", "c", "c", "c"];
const length = compress(chars);
console.log(length, chars.slice(0, length));
