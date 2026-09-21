/**
 * 加一
 * 难度：★☆☆☆☆
 * 用数组表示非负整数（高位在前），将其加一后返回。
 *
 * 示例：[1,2,3] => [1,2,4]；[9,9] => [1,0,0]
 *
 * 思路：从低位向高位进位，全为 9 时在前面补 1。
 * 时间 O(n)，空间 O(1)
 */

export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9]));
