/**
 * 分数到小数
 * 难度：★★★☆☆
 * 给定分子和分母，返回小数的字符串。循环部分用括号标出。
 *
 * 示例：1/2 => "0.5"；2/1 => "2"；4/333 => "0.(012)"
 *
 * 思路：先取整数部分，再模拟长除法。余数若再次出现，则中间数字为循环节。
 * 时间 O(分母)，空间 O(分母)
 */

export function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) {
    return "0";
  }
  const sign = numerator < 0 !== denominator < 0 ? "-" : "";
  let remain = Math.abs(numerator);
  const divisor = Math.abs(denominator);
  const integer = Math.floor(remain / divisor);
  remain %= divisor;
  if (remain === 0) {
    return sign + String(integer);
  }
  const digits: string[] = [];
  const seen = new Map<number, number>();
  while (remain !== 0) {
    const previous = seen.get(remain);
    if (previous !== undefined) {
      const body = digits.join("");
      return `${sign}${integer}.${body.slice(0, previous)}(${body.slice(previous)})`;
    }
    seen.set(remain, digits.length);
    remain *= 10;
    digits.push(String(Math.floor(remain / divisor)));
    remain %= divisor;
  }
  return `${sign}${integer}.${digits.join("")}`;
}

console.log([
  fractionToDecimal(1, 2),
  fractionToDecimal(2, 1),
  fractionToDecimal(4, 333),
]);
