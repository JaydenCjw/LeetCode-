/**
 * 大小为 K 且平均值大于等于阈值的子数组数目
 * 难度：★★☆☆☆
 * 统计长度为 k、平均值大于等于 threshold 的连续子数组个数。
 *
 * 示例：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4 => 3
 *
 * 思路：定长窗口维护和，与 threshold * k 比较，避免浮点。
 * 时间 O(n)，空间 O(1)
 */

export function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const limit = threshold * k;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k) {
      sum -= arr[i - k];
    }
    if (i >= k - 1 && sum >= limit) {
      count++;
    }
  }
  return count;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
