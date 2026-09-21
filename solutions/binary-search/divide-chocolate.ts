/**
 * 分享巧克力
 * 难度：★★★★☆
 * 把巧克力条按切分线分成 k+1 份，每份甜度为该段之和。返回能做到的最小甜度的最大值。
 *
 * 示例：sweetness = [1,2,3,4,5,6,7,8,9], k = 5 => 6
 *
 * 思路：二分最小甜度，贪心看能否切出 k+1 段。
 * 时间 O(n log S)，空间 O(1)
 */

export function maximizeSweetness(sweetness: number[], k: number): number {
  let left = 1;
  let right = sweetness.reduce((sum, value) => sum + value, 0);

  const canSplit = (limit: number): boolean => {
    let pieces = 0;
    let current = 0;
    for (const value of sweetness) {
      current += value;
      if (current >= limit) {
        pieces++;
        current = 0;
      }
    }
    return pieces >= k + 1;
  };

  while (left < right) {
    const mid = Math.ceil((left + right + 1) / 2);
    if (canSplit(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(maximizeSweetness([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
