/**
 * 第 K 个缺失的正整数
 * 难度：★★☆☆☆
 * 严格递增正整数数组，返回未出现的第 k 个正整数。
 *
 * 示例：[2,3,4,7,11], k = 5 => 9
 *
 * 思路：下标 i 之前缺失 arr[i]-i-1 个数，二分缺失个数第一次达到 k 的位置。
 * 时间 O(log n)，空间 O(1)
 */

export function findKthPositive(arr: number[], k: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] - mid - 1 < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left + k;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
