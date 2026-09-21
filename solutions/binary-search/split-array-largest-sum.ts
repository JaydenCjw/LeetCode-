/**
 * 分割数组的最大值
 * 难度：★★★★☆
 * 把数组分成 m 段非空连续子数组，最小化各段和的最大值。
 *
 * 思路：二分这个最大值，检查能否分成不超过 m 段。
 * 时间 O(n log S)，空间 O(1)
 */

export function splitArray(nums: number[], m: number): number {
  let left = Math.max(...nums);
  let right = nums.reduce((sum, value) => sum + value, 0);

  const canSplit = (limit: number): boolean => {
    let parts = 1;
    let current = 0;
    for (const num of nums) {
      if (current + num > limit) {
        parts++;
        current = 0;
      }
      current += num;
    }
    return parts <= m;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canSplit(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(splitArray([7, 2, 5, 10, 8], 2));
