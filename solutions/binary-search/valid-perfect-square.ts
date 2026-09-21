/**
 * 有效的完全平方数
 * 难度：★☆☆☆☆
 * 判断正整数是不是完全平方数，不使用库函数开方。
 *
 * 示例：num = 16 => true；num = 14 => false
 *
 * 思路：二分根。用除法比较，避免平方溢出。
 * 时间 O(log n)，空间 O(1)
 */

export function isPerfectSquare(num: number): boolean {
  let lo = 1;
  let hi = num;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const quotient = Math.floor(num / mid);
    if (quotient === mid && num % mid === 0) {
      return true;
    }
    if (quotient > mid) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
