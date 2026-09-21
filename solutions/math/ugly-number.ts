/**
 * 丑数
 * 难度：★☆☆☆☆
 * 丑数是只含质因数 2、3、5 的正整数。判断 n 是否为丑数。1 视为丑数。
 *
 * 示例：n=6 => true；n=14 => false
 *
 * 思路：不断除掉 2、3、5，最后是否为 1。
 * 时间 O(log n)，空间 O(1)
 */

export function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  let value = n;
  for (const factor of [2, 3, 5]) {
    while (value % factor === 0) {
      value = Math.floor(value / factor);
    }
  }
  return value === 1;
}

console.log([isUgly(6), isUgly(14)]);
