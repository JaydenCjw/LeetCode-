/**
 * 猜数字大小
 * 难度：★☆☆☆☆
 * 在 1..n 中猜 pick。guess 返回 -1 表示猜大了，1 表示猜小了，0 表示猜中。
 *
 * 示例：pick = 6, n = 10 => 6
 *
 * 思路：二分猜测区间，按 guess 的返回值收缩左右端点。
 * 时间 O(log n)，空间 O(1)
 */

const PICK = 6;

function guess(num: number): number {
  if (num > PICK) {
    return -1;
  }
  if (num < PICK) {
    return 1;
  }
  return 0;
}

export function guessNumber(n: number): number {
  let lo = 1;
  let hi = n;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const result = guess(mid);
    if (result === 0) {
      return mid;
    }
    if (result < 0) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}

console.log(guessNumber(10));
