/**
 * Excel 表列序号
 * 难度：★☆☆☆☆
 * 列名 A、B、...、Z、AA 对应 1、2、...、26、27。返回列序号。
 *
 * 示例："AB" => 28
 *
 * 思路：二十六进制。
 * 时间 O(n)，空间 O(1)
 */

export function titleToNumber(columnTitle: string): number {
  let result = 0;
  for (const ch of columnTitle) {
    result = result * 26 + (ch.charCodeAt(0) - 64);
  }
  return result;
}

console.log(titleToNumber("AB"));
