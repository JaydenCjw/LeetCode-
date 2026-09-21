/**
 * 第一个错误的版本
 * 难度：★☆☆☆☆
 * 版本 1..n 中从某个版本起都是错误的。用 isBadVersion 找出第一个错误版本。
 *
 * 示例：n = 5，第 4 个版本开始出错 => 4
 *
 * 思路：二分。中点已错则答案在左侧含中点，否则在右侧。
 * 时间 O(log n)，空间 O(1)
 */

const FIRST_BAD = 4;

function isBadVersion(version: number): boolean {
  return version >= FIRST_BAD;
}

export function firstBadVersion(n: number): number {
  let lo = 1;
  let hi = n;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (isBadVersion(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

console.log(firstBadVersion(5));
