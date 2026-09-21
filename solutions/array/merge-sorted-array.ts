/**
 * 合并两个有序数组
 * 难度：★☆☆☆☆
 * 将 nums2 合并进 nums1（nums1 有足够空间），使结果非递减。
 *
 * 示例：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]
 *
 * 思路：从尾部双指针倒填，避免覆盖未处理元素。
 * 时间 O(m+n)，空间 O(1)
 */

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let write = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write--] = nums1[i--];
    } else {
      nums1[write--] = nums2[j--];
    }
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);
