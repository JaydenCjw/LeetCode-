/**
 * Z 字形变换
 * 难度：★★★☆☆
 * 将字符串按给定行数排成 Z 字形，再按行读出。
 *
 * 示例：s = "PAYPALISHIRING", numRows = 3 => "PAHNAPLSIIGYIR"
 *
 * 思路：按行模拟上下往返。
 * 时间 O(n)，空间 O(n)
 */

export function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  const rows = Array.from({ length: numRows }, () => "");
  let row = 0;
  let step = 1;
  for (const ch of s) {
    rows[row] += ch;
    if (row === 0) {
      step = 1;
    } else if (row === numRows - 1) {
      step = -1;
    }
    row += step;
  }
  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
