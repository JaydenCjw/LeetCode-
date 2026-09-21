/**
 * Excel 表列名称
 * 难度：★★☆☆☆
 * 把列号转成 Excel 列名：1 -> A，26 -> Z，27 -> AA。
 *
 * 示例：columnNumber = 1 => "A"；28 => "AB"；701 => "ZY"
 *
 * 思路：这是 1-based 的 26 进制，每次先减 1 再取余。
 * 时间 O(log n)，空间 O(1)
 */

export function convertToTitle(columnNumber: number): string {
  const chars: string[] = [];
  let value = columnNumber;
  while (value > 0) {
    value--;
    chars.push(String.fromCharCode(65 + (value % 26)));
    value = Math.floor(value / 26);
  }
  return chars.reverse().join("");
}

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
