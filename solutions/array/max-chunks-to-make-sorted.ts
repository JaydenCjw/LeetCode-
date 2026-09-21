/**
 * 最多能完成排序的块
 * 难度：★★★☆☆
 * arr 是 0..n-1 的排列。切成若干块后各自排序再拼接，应得到有序数组。返回最多块数。
 *
 * 示例：arr = [1,0,2,3,4] => 4
 *
 * 思路：当目前见到的最大值等于下标时，这一段可以独立成块。
 * 时间 O(n)，空间 O(1)
 */

export function maxChunksToSorted(arr: number[]): number {
  let chunks = 0;
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
    if (maxValue === i) {
      chunks++;
    }
  }
  return chunks;
}

console.log(maxChunksToSorted([1, 0, 2, 3, 4]));
