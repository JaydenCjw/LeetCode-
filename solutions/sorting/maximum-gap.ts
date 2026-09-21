/**
 * 最大间距
 * 难度：★★★★☆
 * 无序数组中排序后相邻元素的最大差值。要求线性时间和线性空间。元素少于 2 个时返回 0。
 *
 * 示例：[3,6,9,1] => 3
 *
 * 思路：桶排序。最大间距至少是 ceil((max-min)/(n-1))，因此桶内不会产生答案，只需比较相邻非空桶。
 * 时间 O(n)，空间 O(n)
 */

export function maximumGap(nums: number[]): number {
  const count = nums.length;
  if (count < 2) {
    return 0;
  }
  let low = nums[0];
  let high = nums[0];
  for (const value of nums) {
    low = Math.min(low, value);
    high = Math.max(high, value);
  }
  if (low === high) {
    return 0;
  }
  const bucketSize = Math.max(1, Math.floor((high - low) / (count - 1)));
  const bucketCount = Math.floor((high - low) / bucketSize) + 1;
  const bucketLow = Array.from({ length: bucketCount }, () => Number.POSITIVE_INFINITY);
  const bucketHigh = Array.from({ length: bucketCount }, () => Number.NEGATIVE_INFINITY);
  const used = Array.from({ length: bucketCount }, () => false);
  for (const value of nums) {
    const index = Math.floor((value - low) / bucketSize);
    used[index] = true;
    bucketLow[index] = Math.min(bucketLow[index], value);
    bucketHigh[index] = Math.max(bucketHigh[index], value);
  }
  let best = 0;
  let previous = bucketHigh[0];
  for (let index = 1; index < bucketCount; index += 1) {
    if (!used[index]) {
      continue;
    }
    best = Math.max(best, bucketLow[index] - previous);
    previous = bucketHigh[index];
  }
  return best;
}

console.log(maximumGap([3, 6, 9, 1]));
