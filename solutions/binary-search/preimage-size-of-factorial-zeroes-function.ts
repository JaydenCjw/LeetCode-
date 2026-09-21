/**
 * 阶乘函数后 K 个零
 * 难度：★★★★☆
 * 有多少个非负整数 x，使 x! 末尾恰好有 k 个零。
 *
 * 示例：k = 0 => 5
 *
 * 思路：末尾零的个数随 x 非严格递增，且一次最多加多个。二分第一个达到 k 与 k+1 的位置。
 * 时间 O(log k * log x)，空间 O(1)
 */

function trailingZeros(n: number): number {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

function firstWithAtLeast(target: number): number {
  let left = 0;
  let right = target * 5 + 5;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (trailingZeros(mid) < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

export function preimageSizeFZF(k: number): number {
  const left = firstWithAtLeast(k);
  const right = firstWithAtLeast(k + 1);
  return trailingZeros(left) === k ? right - left : 0;
}

console.log(preimageSizeFZF(0));
