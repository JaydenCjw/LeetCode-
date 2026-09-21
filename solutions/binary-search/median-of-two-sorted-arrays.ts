/**
 * 寻找两个正序数组的中位数
 * 给定两升序数组，返回合并后中位数，要求 O(log(m+n))。
 *
 * 示例：nums1 = [1,3], nums2 = [2] => 2
 *
 * 思路：二分较短数组的划分点，保证左半最大值 ≤ 右半最小值。
 * 时间 O(log(min(m,n)))，空间 O(1)
 */

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeft1 = i === 0 ? Number.NEGATIVE_INFINITY : nums1[i - 1];
    const minRight1 = i === m ? Number.POSITIVE_INFINITY : nums1[i];
    const maxLeft2 = j === 0 ? Number.NEGATIVE_INFINITY : nums2[j - 1];
    const minRight2 = j === n ? Number.POSITIVE_INFINITY : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      }
      return Math.max(maxLeft1, maxLeft2);
    }

    if (maxLeft1 > minRight2) right = i - 1;
    else left = i + 1;
  }

  throw new Error("输入非法");
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
