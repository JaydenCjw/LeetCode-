/**
 * 所有数对的异或值
 * 难度：★★☆☆☆
 * 返回 nums1[i] XOR nums2[j] 对所有 i、j 的异或。
 *
 * 示例：nums1 = [2,1,3], nums2 = [10,2,5,0] => 13
 *
 * 思路：某个数出现偶数次则抵消。nums2 长度为奇数时，nums1 每个数都留下；反之亦然。
 * 时间 O(n+m)，空间 O(1)
 */

export function xorAllNums(nums1: number[], nums2: number[]): number {
  let result = 0;
  if (nums2.length % 2 === 1) {
    for (const num of nums1) {
      result ^= num;
    }
  }
  if (nums1.length % 2 === 1) {
    for (const num of nums2) {
      result ^= num;
    }
  }
  return result;
}

console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]));
