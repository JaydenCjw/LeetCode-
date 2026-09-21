/**
 * 整数转换英文表示
 * 难度：★★★★☆
 * 把非负整数转成英文单词表示，单词之间一个空格。
 *
 * 示例：123 => "One Hundred Twenty Three"；12345 => "Twelve Thousand Three Hundred Forty Five"；0 => "Zero"
 *
 * 思路：每三位一组，分别套百位读法，再接 Thousand / Million / Billion。
 * 时间 O(log n)，空间 O(1)
 */

const BELOW_TWENTY = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

function readHundreds(num: number): string {
  if (num === 0) {
    return "";
  }
  if (num < 20) {
    return BELOW_TWENTY[num];
  }
  if (num < 100) {
    const rest = num % 10;
    return TENS[Math.floor(num / 10)] + (rest === 0 ? "" : ` ${BELOW_TWENTY[rest]}`);
  }
  const rest = num % 100;
  return `${BELOW_TWENTY[Math.floor(num / 100)]} Hundred${rest === 0 ? "" : ` ${readHundreds(rest)}`}`;
}

export function numberToWords(num: number): string {
  if (num === 0) {
    return "Zero";
  }
  const parts: string[] = [];
  let value = num;
  let group = 0;
  while (value > 0) {
    const chunk = value % 1000;
    if (chunk > 0) {
      const words = readHundreds(chunk);
      const unit = THOUSANDS[group];
      parts.push(unit.length === 0 ? words : `${words} ${unit}`);
    }
    value = Math.floor(value / 1000);
    group++;
  }
  return parts.reverse().join(" ");
}

console.log(numberToWords(123));
console.log(numberToWords(12345));
console.log(numberToWords(0));
