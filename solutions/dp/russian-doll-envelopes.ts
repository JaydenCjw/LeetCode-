/**
 * 俄罗斯套娃信封问题
 * 难度：★★★★☆
 * 信封宽高都严格更大才能套进去，求最多能套多少个。
 *
 * 示例：[[5,4],[6,4],[6,7],[2,3]] => 3
 *
 * 思路：按宽度升序、同宽时高度降序，再对高度做严格 LIS（二分维护尾巴）。
 * 时间 O(n log n)，空间 O(n)
 */

export function maxEnvelopes(envelopes: number[][]): number {
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  const tails: number[] = [];
  for (const envelope of envelopes) {
    const height = envelope[1];
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < height) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    if (lo === tails.length) {
      tails.push(height);
    } else {
      tails[lo] = height;
    }
  }
  return tails.length;
}

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ]),
);
