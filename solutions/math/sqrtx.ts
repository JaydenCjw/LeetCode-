/**
 * x 的平方根
 * 计算并返回非负整数 x 的算术平方根（向下取整）。
 *
 * 示例：x = 8 => 2
 *
 * 思路：二分查找最大的 mid，使 mid*mid <= x。
 * 时间 O(log x)，空间 O(1)
 */

export function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }

  let left = 1;
  let right = Math.floor(x / 2);
  let answer = 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid <= Math.floor(x / mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(mySqrt(4));
console.log(mySqrt(8));
