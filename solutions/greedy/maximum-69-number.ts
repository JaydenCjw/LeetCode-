/**
 * 最大为 6 和 9 组成的数字
 * 难度：★☆☆☆☆
 * 数字只由 6 和 9 组成，最多把一位 6 改成 9，求能得到的最大值。
 *
 * 示例：num = 9669 => 9969
 *
 * 思路：把最高位的 6 改成 9。
 * 时间 O(位数)，空间 O(位数)
 */

export function maximum69Number(num: number): number {
  const digits = String(num).split("");
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }
  return Number(digits.join(""));
}

console.log(maximum69Number(9669));
