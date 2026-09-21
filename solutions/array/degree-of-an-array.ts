/**
 * 数组的度
 * 难度：★★☆☆☆
 * 数组的度是出现次数最多的元素的频次。返回和原数组度相同的最短连续子数组长度。
 *
 * 示例：nums = [1,2,2,3,1] => 2
 *
 * 思路：记录每个值的首次下标和频次，频次达到当前度时更新最短长度。
 * 时间 O(n)，空间 O(n)
 */

export function findShortestSubArray(nums: number[]): number {
  const first = new Map<number, number>();
  const count = new Map<number, number>();
  let degree = 0;
  let best = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!first.has(num)) {
      first.set(num, i);
    }
    const freq = (count.get(num) ?? 0) + 1;
    count.set(num, freq);
    const length = i - (first.get(num) ?? i) + 1;
    if (freq > degree) {
      degree = freq;
      best = length;
    } else if (freq === degree && length < best) {
      best = length;
    }
  }
  return best;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
